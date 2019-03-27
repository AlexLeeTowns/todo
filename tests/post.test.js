import { post } from 'axios'

describe('Post request test suite', () => {
    test('happy path', async () => {
        const response = await post(
            'http://localhost:5000/api/v1/todos',
            {
                title: 'this is a test',
                description: 'of the thing'
            }
        )
        expect(response.status).toBe(201)
    })
})