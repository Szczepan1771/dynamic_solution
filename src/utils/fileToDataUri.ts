export const fileToDataUri = (file: File) => new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (evt => {
        if (evt.target) {
            resolve(evt.target.result)
        }
    })
    reader.readAsDataURL(file)
})