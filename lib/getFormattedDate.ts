export const getFormattedDate = (dateString: string) => {
  return new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' }).format(
    new Date(dateString)
  )
}
