import { request } from 'http'

export async function newsletterForm(email: string) {

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed'
            }
        ]
    }

    const postData = JSON.stringify(data)

    const options = {
        url: '',
        method: 'POST',
        headers: {
            Authorization: ''
        },
        body: postData
    }

    request(options)
}