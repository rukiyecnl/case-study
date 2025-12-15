import personalCare from "~/assets/images/personalCare.jpg"
import skinCare from "~/assets/images/skinCare.jpg"
import makeup from "~/assets/images/makeup.jpg"
import motherBaby from "~/assets/images/motherBaby.jpg"

export const useFeaturedCategories = () => {
    const featuredCategories = [
        {
            id: 0,
            title: "Personal Care",
            description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
            image:  personalCare
        },
        {
            id: 1,
            title: "Skin Care",
            description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
            image: skinCare
        },
        {
            id: 2,
            title: "Make - Up",
            description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
            image: makeup
        },
        {
            id: 3,
            title: "Mother & Baby",
            description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
            image: motherBaby
        }
    ]

    return {
        featuredCategories,
    }
}