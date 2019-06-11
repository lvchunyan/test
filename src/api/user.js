import { path, axios } from '@/libs/common'

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: path.userLogin,
    data,
    method: 'post',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: path.getUserSubject,
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: path.logout,
    method: 'post'
  })
}

export const getMessage = (params) => {
  return axios.request({
    url: path.getMyLngMessageList,
    params,
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
