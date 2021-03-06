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
        content: "Son madres primerizas"
    },
    {
        title: "+44%",
        icon: "/img/icons/clase.svg",
        content: "De las madres primerizas no finalizaron sus estudios secundarios"
    },
]

const ArticleBeneficiarios = () => {
    return (
        <article className="w-full min-h-max md:min-h-screen max-h-max">
                <div className="max-w-7xl mx-auto px-5 sm:px-10 py-0">
                    <div className="mt-5 md:mt-20">
                        <p className="text-semiblack font-bold text-xl md:text-4xl">
                            Para quiénes hacemos Dýnamai
                        </p>
                        <div className="flex flex-row items-start flex-nowrap pt-0 md:pt-10 w-full justify-between">
                        {
                            infoBeneficiarios.map( item => (
                            <div key={item.title} className="w-full py-8 flex flex-col items-center">
                                <div className="rounded-full bg-acento-2 h-20 w-20 md:h-48 md:w-48 flex items-center justify-center">
                                    <img className="w-12 md:w-32 select-none" src={item.icon} alt={item.title} />
                                </div>
                                <div className="w-full pt-4 flex flex-col items-center justify-center">
                                    <p className="font-extrabold text-center text-base md:text-5xl">{item.title}</p>
                                    <p className="w-full text-sm sm:text-2xl text-center">{item.content}</p>
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
