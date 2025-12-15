import mail from "~/assets/images/mail.png"
import footerPhone from "~/assets/images/footerPhone.png"
import location from "~/assets/images/location.png"

export const useFooterData = () => {
    const footerInfos = [
    {
        id: 0,
        title: "Corporate",
        subtitles: [
            { 
                text: "About Us", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Press", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Human Resources", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "News from us", 
                link: "/#", 
                icon: null 
            }
        ]
    },
    {
        id: 1,
        title: "Shopping",
        subtitles: [
            { 
                text: "Order and Payment", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Cancellation and Refund", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Delivery Conditions", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Secure Shopping", 
                link: "/#", 
                icon: null 
            }
        ]
    },
    {
        id: 2,
        title: "Legal",
        subtitles: [
            { 
                text: "Terms of Use", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Privacy Policy", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Membership Agreement", 
                link: "/#", 
                icon: null 
            },
            { 
                text: "Distance Selling Contract", 
                link: "/#", 
                icon: null 
            }
        ]
    },
    {
        id: 3,
        title: "Help center",
        subtitles: [
            { text: "FAQ", link: "/#", icon: null },
            { text: "Contact Center", link: "/#", icon: null }
        ]
    },
    {
        id: 4,
        title: "Contact us",
        subtitles: [
            { 
                icon: location, 
                text: "Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768 Ümraniye/İstanbul", 
                link: null },
            { 
                icon: footerPhone, 
                text: "0850 755 9987", 
                link: null },
            { 
                icon: mail, 
                text: "info@watsons.com.tr", 
                link: null 
            }
        ]
    }
    ]

    return { footerInfos }
}
