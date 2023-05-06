const app = require('../index.js');
const Task = require('../models/Task.js');
const request = require('supertest');
describe("Running test Cases",() => {
    let taskId;
    beforeAll((done)=>{
        Task.remove({}).then(()=>done());
    })
    // var taskId = "";
    describe('POST /tasks', () => {
        it('should create a new task', (done) => {
            request(app)
            .post('/tasks')
            .send({title:"Test task text",status:"Progress"})
            .expect(200)
            .expect((res) => {
                taskId = res.body.id;
                expect(res.body.message).toBe("Task added successfully");
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Task.find().then((todos) => {
                    expect(todos.length).toBe(1);//3 because we have 2 todos in db and we are adding one more
                    done();
                }).catch((e) => done(e));
            });
        });
    
        it('should not create todo with invalid body data', (done) => {
            request(app)
            .post('/tasks')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
    
                Task.find().then((todos) => {
                    expect(todos.length).toBe(1);//3 because we have 2 todos in db and we are adding one more
                    done();
                }).catch((e) => done(e));
            });
        });
    });

    describe('GET /tasks/:id', () => {
        it('should return task document', (done) => {
            request(app)
            .get(`/tasks/${taskId}`)
            .expect(200)
            .expect((res) => {
                expect(res.statusCode).toBe(200);
            })
            .end(done);
        });
    
        it('should return 400 if task not found', (done) => {
            request(app)
            .get('/tasks/5b7a8c8a1c9d4400001c9d2e')
            .expect(400)
            .end(done);
        });
    });
    describe('GET /tasks', () => {
        it('should return all todos', (done) => {
            request(app)
            .get('/tasks')
            .expect(200)
            .expect((res) => {
                expect(res.statusCode).toBe(200);
            })
            .end(done);
        });
    }); 
    describe('Put /takss', () => {
        it('should update tasks', (done) => {
            request(app)
            .put('/tasks')
            .send({id:taskId,title:"Test todo text",status:"Completed"})
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("Task updated successfully");
            })
            .end(done);
        });
    
        it('should return 400 if task not found', (done) => {
            request(app)
            .put('/tasks')
            .send({id:"5b7a8c8a1c9d4400001c9d2e",title:"Test todo text",status:"Completed"})
            .expect(400)
            .end(done);
        });
    });
    
    describe('Delete /tasks/:id', () => {
        it('should delete task', (done) => {
            request(app)
            .delete(`/tasks/${taskId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("Task has been deleted");
            })
            .end(done);
        });
    
        it('should return 400 if task not found', (done) => {
            request(app)
            .delete('/tasks/5b7a8c8a1c9d4400001c9d2e')
            .expect(400)
            .end(done);
        });
    });
});









