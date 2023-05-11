export const saveItem = (key: string, object: any) =>
  localStorage.setItem(key, JSON.stringify(object))

export const getItem = (key: string) => {
  let response = null
  const rawObject = localStorage.getItem(key)
  if (rawObject) response = JSON.parse(rawObject)

  return response
}
