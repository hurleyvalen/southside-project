import { defineArrayMember, defineField, defineType } from "sanity";

export const menu = defineType({
    name: "menu",
    title: "Menu",
    type: "document",
    fields:[
        defineField({
            name: "category",
            type: "string",
            validation: (Rule: { required: () => any; }) => Rule.required()
        }),
        defineField({
            name: "subCategory",
            type: "string",
            options:{
                list:[
                    {title: "Coffee-Based", value: "(Coffee-Based)"},
                    {title: "Non-Coffee", value: "(Non-Coffee)"},
                ]
            }
        }),
        defineField({
            name:"menuList",
            type:"array",
            of:[
                defineArrayMember({
                    name:"items",
                    type:"object",
                    fields:[
                        {
                            name: "item",
                            type: "string",
                            validation: (Rule: { required: () => any; }) => Rule.required()
                        },
                        {
                            name: "price",
                            type: "string",
                            validation: (Rule: { required: () => any; }) => Rule.required()
                        },
                        {
                            name: "src",
                            type: "string",
                            validation: (Rule: { required: () => any; }) => Rule.required()
                        }
                    ]
                })
            ]
        }),
    ],
})