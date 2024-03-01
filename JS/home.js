let virus = [
    {
        img: "Assets/covid.png",
        title: "SARS-CoV-2 (COVID-19):",
        disc: "This coronavirus caused the ongoing global pandemic, leading to widespread illness, death, economic disruption, and significant healthcare challenges.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/hiv.png",
        title: "HIV (Human Immunodeficiency Virus):",
        disc: "The virus that causes AIDS (Acquired Immunodeficiency Syndrome), impacting the immune system and leading to severe health complications.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/flu.png",
        title: "Influenza Virus (Flu):",
        disc: "Seasonal influenza viruses, such as H1N1 or H3N2 strains, cause yearly outbreaks resulting in respiratory illness worldwide.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/hbv.png",
        title: "Hepatitis B Virus (HBV):",
        disc: "A significant cause of hepatitis, leading to liver inflammation, chronic infection, and potentially long-term liver problems.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/hcv.png",
        title: "Hepatitis C Virus (HCV):",
        disc: "Another major cause of hepatitis, often leading to chronic liver disease and complications if left untreated.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/ebola.png",
        title: "Ebola Virus:",
        disc: "Known for causing severe and often fatal hemorrhagic fever outbreaks in Africa, with high mortality rates during certain outbreaks.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/zika.png",
        title: "Zika Virus:",
        disc: "Linked to birth defects when contracted by pregnant women and known to cause neurological complications in some cases.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/vzv.png",
        title: "Varicella-Zoster Virus (VZV):",
        disc: "Causes chickenpox during initial infection and can later reactivate as shingles, a painful rash.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/hpv.png",
        title: "Human Papillomavirus (HPV):",
        disc: "A common sexually transmitted infection leading to various health issues, including cervical cancer and genital warts.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/hsv.png",
        title: "Herpes Simplex Virus (HSV):",
        disc: "Causes oral and genital herpes, leading to recurring outbreaks of sores or blisters.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/rotavirus.png",
        title: "Rotavirus:",
        disc: "A leading cause of severe diarrhea, particularly in infants and young children, which can result in dehydration and hospitalization.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    },
    {
        img: "Assets/measles.png",
        title: "Measles Virus:",
        disc: "Highly contagious and can cause severe complications, including pneumonia, encephalitis, and in some cases, death.",
        year: "",
        localtion: "",
        spread: "",
        precaution: ""
    }
]

for (let i = 0; i < virus.length; i++) {
    document.querySelector(".virus-cards").innerHTML +=
    `<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <a href="#">
        <div class="card-viruses">
            <div class="card-img" style="background-image: url(${virus[i].img});"></div>
        <div class="card-body">
            <h3 class="card-title">${virus[i].title}</h3>
            <p class="card-disc">${virus[i].disc}</p>
        </div>
        </div>
        </a>
    </div>`
}