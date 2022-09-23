const $addSensorForm = document.querySelector('.add-sensor-form')

const $latInput = document.querySelector('.lat-input')
const $lngInput = document.querySelector('.lng-input')


const handleGeolocation = () => {
    const onSuccess = (position) => {
        console.log("success prosition",position)
        if (position && position.coords) {
            $latInput.value = position.coords.latitude
            $lngInput.value = position.coords.longitude
        }
    }

    const onError = error => {
        console.log("erreor position",error)
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(onSuccess,onError)
    }
}

const main = () => {
    handleGeolocation()

    $addSensorForm.addEventListener('submit', e => {
        e.preventDefault()
        return e.target.value;
        
        console.log("===")
    })
}

main()
