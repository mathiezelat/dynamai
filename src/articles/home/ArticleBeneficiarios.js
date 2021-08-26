import React from 'react'

const infoBeneficiarios = [
    {
        title: "+765.000",
        icon: "/img/icons/argentina.svg",
        content: "Niños y niñas nacen cada año en Argentina"
    },
    {
        title: "+300.000",
        icon: "/img/icons/mujer-embarazada.svg",
        content: "Son madres primarizas"
    },
    {
        title: "+44%",
        icon: "/img/icons/clase.svg",
        content: "De las madres primarizas no finalizaron sus estudios secundarios"
    },
]

const ArticleBeneficiarios = () => {
    return (
        <article className="w-full min-h-screen max-h-max">
                <div className="max-w-7xl mx-auto px-10 py-6">
                    <div className="mt-20">
                        <h1 className="text-semiblack">
                            Beneficiarios potenciales
                        </h1>
                        <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap pt-10 w-full justify-between">
                        {
                            infoBeneficiarios.map( item => (
                            <div key={item.title} className="max-w-sm py-8 flex flex-col items-center">
                                <div className="rounded-full bg-acento-2 h-48 w-48 flex items-center justify-center">
                                    <img className="w-32 select-none" src={item.icon} alt="hola" />
                                </div>
                                <div className="w-full pt-4 flex flex-col items-center justify-center">
                                    <h1 className="font-extrabold text-center">{item.title}</h1>
                                    <p className="w-full text-center">{item.content}</p>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
        </article>
    )
}

export default ArticleBeneficiarios;