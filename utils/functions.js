export const toEuropean = date => {
    return date?.replace(/-/g, ' / ').split(' ').reverse().join('')
}

export const toAmerican = date => {
    return date?.replace(/-/g, ' - ').replace(/\//g, ' - ').split(' ').reverse().join('')
}
