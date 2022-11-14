import format from 'date-fns/format'

const FORMAT = 'yyyy-MM-dd'

export const parseDateToString = (date: Date) => {
    return format(date, FORMAT)
}