import {defineType, defineField} from 'sanity'

export const socialLinkType = defineType({
    name: 'socialLink',
    title: 'Social Link',
    type: 'document',
    fields: [
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Twitter', value: 'twitter' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'LinkedIn', value: 'linkedin' },
                    { title: 'YouTube', value: 'youtube' },
                    { title: 'TikTok', value: 'tiktok' },
                    { title: 'GitHub', value: 'github' },
                    { title: 'Pinterest', value: 'pinterest' },
                    { title: 'Snapchat', value: 'snapchat' },
                    { title: 'Reddit', value: 'reddit' },
                    { title: 'Tumblr', value: 'tumblr' },
                    { title: 'Twitch', value: 'twitch' },
                    { title: 'Discord', value: 'discord' },
                    { title: 'WhatsApp', value: 'whatsapp' },
                    { title: 'Email', value: 'email' },
                ],
            },
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
    ],
})