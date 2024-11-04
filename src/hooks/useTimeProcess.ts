export default function useTimeProcess() {
  const dateStr = (date: number) => {
    const time = new Date().getTime()
    const diff = (time - date) / 1000
    if (diff < 60 * 10) {
      return '刚刚'
    } else if (diff < 60 * 60 && diff >= 60 * 10) {
      return `${Math.floor(diff / 60)}分钟前`
    } else if (diff < 60 * 60 * 24 && diff >= 60 * 60) {
      return `${Math.floor(diff / 60 / 60)}小时前`
    } else if (diff < 60 * 60 * 24 * 30 && diff >= 60 * 60 * 24) {
      return `${Math.floor(diff / 60 / 60 / 24)}天前`
    } else {
      const dateObj = new Date(date)
      return `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}`
    }
  }

  return { dateStr }
}
