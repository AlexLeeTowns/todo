import { get } from 'axios';


describe('Simple test suite', () => {
    test('I can make a get request', () => {
        return get('http://localhost:5000/api/v1/todos').then(response => {
            expect(response.status).toBe(200)
        })
    })
})