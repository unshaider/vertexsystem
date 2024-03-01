let virus = [
    {
        heading : "Virus Education and Awareness",
        para : "Our first primary service focuses on educating individuals about viruses and their impact. We provide valuable information about different types of viruses, their symptoms, and precautions to help you stay safe."
    },
    {
        heading : "Virus Detection and Removal",
        para : "Our second primary service offers reliable virus prevention solutions. We deploy robust security measures to protect your system from potential virus attacks, ensuring uninterrupted productivity and peace of mind."
    },
    {
        heading : "Virus Protection Solutions",
        para : "Our third primary service provides comprehensive solutions to combat the effects of viruses and protect your system from potential threats. With our state-of-the-art technology and expertise, we ensure that your system remains secure and your data is safeguarded."
    },
    {
        heading : "Virus Prevention",
        para : "Our fourth primary service offers advanced virus detection and removal solutions. Our team of experts is equipped with the latest tools and techniques to identify and eliminate viruses from your system, ensuring its optimal performance."
    }
]
for (let i = 0; i < virus.length; i++) {
    document.querySelector(".virus-cards").innerHTML +=
    `<div class="col-md-6 mb-4">
        <div class="card-body">
            <h3 class="card-title">${virus[i].heading}</h3>
            <p class="card-disc">${virus[i].para}</p>
        </div>
        </div>
        </a>
    </div>`
}