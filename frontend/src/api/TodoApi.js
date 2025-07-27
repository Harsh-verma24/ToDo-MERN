import axios from './axiosInstance.js'

export const fetchTodo = async () => {
    const res =await axios.get('/todos')
    return res.data
}

export const addTodo = async (title) => {
    const res =await axios.post('/todos',{title})
    return res.data
}

export const deleteTodo = async (id) => {
    await axios.delete(`/todos/${id}`)
}

export const updateTodo = async (id,updatedData) => {
    const res =await axios.put(`/todos/${id}`,updatedData)
    return res.data
}