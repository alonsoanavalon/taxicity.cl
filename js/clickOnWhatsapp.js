const d = document;

export default function clickOnWhatsapp (whatsapp, whatsappIcon, url) {

    const $whatsapp = d.querySelector(whatsapp)
    const $whatsappIcon = d.querySelector(whatsappIcon)

    d.addEventListener("click", e => {

    
            if (e.target == $whatsapp || e.target == $whatsapp.firstChild || e.target == $whatsappIcon) {
                window.location.href = url;
            }

    })

}