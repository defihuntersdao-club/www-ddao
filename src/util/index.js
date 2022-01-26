export const defaultDirection = 'ltr'

export const getDirection = () => {
    let direction = defaultDirection
    if (localStorage.getItem('direction')) {
        const localValue = localStorage.getItem('direction')
        if (localValue === 'rtl' || localValue === 'ltr') {
            direction = localValue
        }
    }
    return {
        direction,
        isRtl: direction === 'rtl'
    }
}

export const localeOptions = [
    { id: 'ru', name: 'Русский', direction: 'ltr'},
    { id: 'en', name: 'English', direction: 'ltr' },
   // { id: 'es', name: 'Español', direction: 'ltr' },
]

export const maxApproveSum = 10000000