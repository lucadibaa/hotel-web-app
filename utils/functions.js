export const capitalize = string => {
    return string?.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export const toEuropean = date => {
    return date?.replace(/-/g, ' / ').split(' ').reverse().join('')
}

export const toAmerican = date => {
    return date?.replace(/-/g, ' - ').replace(/\//g, ' - ').split(' ').reverse().join('')
}

export const getDigits = string => {
    const regex = /\d+/g
    return string.match(regex)
}
