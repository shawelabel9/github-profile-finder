import axios from 'axios'

export const getUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const users = await axios.get(`https://api.github.com/search/users?${params}`)

    return users.data.items
}