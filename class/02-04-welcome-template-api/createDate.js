export const getToday = () => {
        // 오늘 날짜로 만들기!!
        const date = new Date()
        const yyyy = date.getFullYear()
        const mm = String(date.getMonth()+1).padStart(2, "0")
        const dd = String(date.getDate()).padStart(2,"0")
        const today = `${yyyy}-${mm}-${dd}`
        return today
}