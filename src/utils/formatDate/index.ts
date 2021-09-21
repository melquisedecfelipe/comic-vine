export const formatDate = (date: string): string => {
  const newDate = new Date(date)

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(newDate)
}

export const formatDateToIso = (date: string): string => {
  const newDate = new Date(date)

  return newDate.toISOString().substring(0, 10)
}
