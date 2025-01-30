import { defineField, defineType } from "sanity";

export const schedule = defineType({
    name: "schedule",
    title: "Schedule",
    type: "document",
    fields:[
        defineField({
            name: "weekDay",
            type: "string",
            validation: (Rule) => Rule.required()

        }),
        defineField({
            name: "hours",
            type: "string",
            validation: (Rule) => Rule.required()

        }),
        defineField({
            name: "status",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
    ]
})