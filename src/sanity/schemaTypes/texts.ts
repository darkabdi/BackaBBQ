import { defineField, defineType } from "sanity";


export const Hero = defineType({
    name:'hero',
    title:'Hero Section',
    type:'document',
    fields:[
        defineField({
            name:'tagline',
            title:'Tagline',
            type: 'string'
        }),
        defineField({
            name:'mainHeading',
            title:'Main Heading',
            type:'string',
        }),
        defineField({
            name: 'subHeading',
            title: 'SubHeading',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
    }),
        defineField({
            name: 'primaryButtonText',
            title: 'Primary Button Text',
            type: 'string',
    }),
    ]
})