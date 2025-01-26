import { defineField, defineType } from "sanity";

export const appointment = defineType({
    name: "appointment",
    title: "Appointment",
    type: "document",
    fields:[
        defineField({
            name: "id",
            type: "number",

        }),
        defineField({
            name: "month",
            type: "string",

        }),
        defineField({
            name: "day",
            type: "number",

        }),
        defineField({
            name: "time",
            type: "string",

        }),
        defineField({
            name: "title",
            type: "string",

        }),
        defineField({
            name: "description",
            type: "string",

        }),
        defineField({
            name: "userDetails",
            type: "string",

        }),
    ]
})