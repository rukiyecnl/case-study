import mail from "~/assets/images/mail.png"
import footerPhone from "~/assets/images/footerPhone.png"
import location from "~/assets/images/location.png"

export const useFooterData = () => {
    const footerInfos = [
        {
            id: 0,
            title: "corporate",
            subtitles: [
                "About Us",
                "Press",
                "Human resources",
                "News from us"
            ]
        },
        {
            id: 1,
            title: "shoppıng",
            subtitles: [
                "Order and Payment",
                "Cancellation and Refund",
                "Delivery Conditions",
                "Secure Shopping"
            ]
        },
        {
            id: 2,
            title: "Legal",
            subtitles: [
                "Terms of Use",
                "Privacy Policy",
                "Membership Agreement",
                "Distance Selling Contract"
            ]
        },        
        {
            id: 3,
            title: "Help Center",
            subtitles: [
                "FAQ",
                "Contact Center"
            ]
        },
    ]

    return {
        footerInfos,
    }
}