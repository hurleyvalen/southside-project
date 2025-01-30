import { defineField, defineType } from "sanity";

export const appointment = defineType({
    name: "appointment",
    title: "Appointment",
    type: "document",
    fields:[
        defineField({
            name: "month",
            type: "string",
            validation: (Rule) => Rule.required().error("Please enter month.")
        }),
        defineField({
            name: "day",
            type: "number",
            validation: (Rule) => Rule.required().error("Please enter day.")
        }),
        defineField({
            name: "time",
            type: "string",
            validation: (Rule) => Rule.required().error("Please enter time.")
        }),
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Please enter title.")
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (Rule) => Rule.required().error("Please enter description.")
        }),
        defineField({
            name: "userDetails",
            type: "object",
            validation: (ObjectRule) => ObjectRule.required().error("Please enter user details."),
            fields: 
            [
                {type: "string", name: "name"}, 
                {type: "string", name: "phone"}
            ]
        }),
    ]
})