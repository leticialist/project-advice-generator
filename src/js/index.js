const adviceUpdate = document.querySelector('.advice-update')
const adviceNumber = document.querySelector('.advice-number')
const adviceDescription = document.querySelector('.advice-description')

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const adviceContent = await response.json()
    const adviceId = `ADVICE #${adviceContent.slip.id}`
    const adviceText = `"${adviceContent.slip.advice}"`

    adviceNumber.innerHTML = adviceId
    adviceDescription.innerHTML = adviceText
}

adviceUpdate.addEventListener('click', getAdvice)

getAdvice()