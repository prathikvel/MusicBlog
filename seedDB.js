// PACKAGES
const mongoose = require("mongoose");

// MODELS
const Models = require("./models");

const seeds = [
    {
        author: "Prathik",
        description: "This is a really cool album.",
        rating: 10,
        image: "https://media.pitchfork.com/photos/5929ac7fc0084474cd0c1583/1:1/w_320/831179e9.jpeg",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dolor velit, vel ullamcorper est volutpat eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut porttitor ligula. Nunc vehicula dui nec scelerisque efficitur. Duis at dolor sed urna vehicula mollis in eget lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas non mauris dapibus, scelerisque arcu vel, fringilla arcu. Aliquam erat volutpat. Phasellus nec posuere est, non volutpat augue. Fusce eget porta arcu. Vivamus nec facilisis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec lacus metus. Maecenas elementum felis in commodo euismod. Maecenas et lacus varius, lobortis dolor eu, venenatis mauris. Sed id nunc risus.</p>\n<p>Duis efficitur nisl vel neque posuere pellentesque. Praesent bibendum justo dolor, eget congue elit finibus vel. Quisque scelerisque et odio cursus suscipit. Aenean et rhoncus sapien. Suspendisse eget elit et arcu luctus tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sed sollicitudin massa. Phasellus lobortis lobortis nibh, id rhoncus lectus posuere a. Integer in tincidunt mi. Fusce tincidunt lorem eu leo rhoncus tristique. Sed dignissim lacus sit amet consectetur volutpat. Aenean hendrerit molestie neque, sed accumsan sem finibus sed. Donec ut sem nulla. Phasellus volutpat leo et egestas viverra.</p>\n<p>Nunc et tortor vel massa tempus gravida eget vitae augue. Duis vitae diam leo. Aenean nec lorem id libero euismod sodales. Donec ac elit vel nisi commodo dignissim id vel augue. Nulla sed massa vitae mi aliquet faucibus. Maecenas scelerisque ex id venenatis euismod. Maecenas vel lectus congue, congue dolor in, pellentesque nibh.</p>\n<p>Fusce congue arcu purus, eu lobortis ex pretium in. Proin ultricies velit dolor, vitae vestibulum ante sodales vitae. In hac habitasse platea dictumst. Vivamus molestie mi sed ipsum scelerisque condimentum. Ut ultricies turpis id erat ornare, ut congue mauris facilisis. Fusce molestie turpis sit amet dictum varius. Proin fermentum turpis neque, sit amet placerat neque varius eget. Cras tempor lorem nec ipsum tincidunt gravida. Quisque sit amet erat dictum, consectetur metus eget, viverra libero. Ut molestie tempor consectetur. Maecenas et consectetur nibh. Aliquam placerat ultrices placerat. Proin feugiat pulvinar lacus et tempor. Suspendisse facilisis nulla fringilla lacus elementum euismod. Integer arcu urna, ultrices scelerisque tempor posuere, convallis eu felis. Aliquam in venenatis massa.</p>\n<p>Donec ultricies nibh nec justo vestibulum varius. Nullam ornare mattis diam interdum faucibus. Mauris ut lobortis sapien. Aliquam erat volutpat. Nunc porta gravida quam, at tristique eros faucibus sit amet. Quisque vel velit posuere, varius est et, congue libero. Sed lobortis dolor orci, at luctus lorem posuere at. Pellentesque ut ligula interdum diam tempus accumsan. Duis sollicitudin erat a lobortis mattis. Cras sit amet scelerisque ex. Morbi condimentum, orci ac mollis rhoncus, urna diam dignissim mi, ut aliquet metus magna vel mauris. Morbi vitae sodales eros, eget aliquet dui.</p>",
        metadata: {
            type: {
                album: true
            },
            album: "My Beautiful Dark Twisted Fantasy",
            artist: "Kanye West",
            genre: "Rap"
        },
        feature: {
            main: true
        }
    },
    {
        author: "Prathik",
        description: "I love this song.",
        image: "https://media.pitchfork.com/photos/5929b07ac0084474cd0c1c63/1:1/w_320/eae6dd69.jpg",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dolor velit, vel ullamcorper est volutpat eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut porttitor ligula. Nunc vehicula dui nec scelerisque efficitur. Duis at dolor sed urna vehicula mollis in eget lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas non mauris dapibus, scelerisque arcu vel, fringilla arcu. Aliquam erat volutpat. Phasellus nec posuere est, non volutpat augue. Fusce eget porta arcu. Vivamus nec facilisis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec lacus metus. Maecenas elementum felis in commodo euismod. Maecenas et lacus varius, lobortis dolor eu, venenatis mauris. Sed id nunc risus.</p>\n<p>Duis efficitur nisl vel neque posuere pellentesque. Praesent bibendum justo dolor, eget congue elit finibus vel. Quisque scelerisque et odio cursus suscipit. Aenean et rhoncus sapien. Suspendisse eget elit et arcu luctus tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sed sollicitudin massa. Phasellus lobortis lobortis nibh, id rhoncus lectus posuere a. Integer in tincidunt mi. Fusce tincidunt lorem eu leo rhoncus tristique. Sed dignissim lacus sit amet consectetur volutpat. Aenean hendrerit molestie neque, sed accumsan sem finibus sed. Donec ut sem nulla. Phasellus volutpat leo et egestas viverra.</p>\n<p>Nunc et tortor vel massa tempus gravida eget vitae augue. Duis vitae diam leo. Aenean nec lorem id libero euismod sodales. Donec ac elit vel nisi commodo dignissim id vel augue. Nulla sed massa vitae mi aliquet faucibus. Maecenas scelerisque ex id venenatis euismod. Maecenas vel lectus congue, congue dolor in, pellentesque nibh.</p>\n<p>Fusce congue arcu purus, eu lobortis ex pretium in. Proin ultricies velit dolor, vitae vestibulum ante sodales vitae. In hac habitasse platea dictumst. Vivamus molestie mi sed ipsum scelerisque condimentum. Ut ultricies turpis id erat ornare, ut congue mauris facilisis. Fusce molestie turpis sit amet dictum varius. Proin fermentum turpis neque, sit amet placerat neque varius eget. Cras tempor lorem nec ipsum tincidunt gravida. Quisque sit amet erat dictum, consectetur metus eget, viverra libero. Ut molestie tempor consectetur. Maecenas et consectetur nibh. Aliquam placerat ultrices placerat. Proin feugiat pulvinar lacus et tempor. Suspendisse facilisis nulla fringilla lacus elementum euismod. Integer arcu urna, ultrices scelerisque tempor posuere, convallis eu felis. Aliquam in venenatis massa.</p>\n<p>Donec ultricies nibh nec justo vestibulum varius. Nullam ornare mattis diam interdum faucibus. Mauris ut lobortis sapien. Aliquam erat volutpat. Nunc porta gravida quam, at tristique eros faucibus sit amet. Quisque vel velit posuere, varius est et, congue libero. Sed lobortis dolor orci, at luctus lorem posuere at. Pellentesque ut ligula interdum diam tempus accumsan. Duis sollicitudin erat a lobortis mattis. Cras sit amet scelerisque ex. Morbi condimentum, orci ac mollis rhoncus, urna diam dignissim mi, ut aliquet metus magna vel mauris. Morbi vitae sodales eros, eget aliquet dui.</p>",
        metadata: {
            type: {
                track: true
            },
            album: "Rodeo",
            track: "Pray 4 Love (feat. The Weeknd)",
            artist: "Travis Scott",
            genre: "Rap"
        },
        feature: {
            "side-a": true
        }
    },
    {
        title: "Custom Article",
        author: "Prathik",
        description: "This is a custom article.",
        image: "https://media.pitchfork.com/photos/5eec12ef464fe661509aa192/2:1/w_2560%2Cc_limit/Mercury%252520Lounge.jpg",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dolor velit, vel ullamcorper est volutpat eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut porttitor ligula. Nunc vehicula dui nec scelerisque efficitur. Duis at dolor sed urna vehicula mollis in eget lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas non mauris dapibus, scelerisque arcu vel, fringilla arcu. Aliquam erat volutpat. Phasellus nec posuere est, non volutpat augue. Fusce eget porta arcu. Vivamus nec facilisis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec lacus metus. Maecenas elementum felis in commodo euismod. Maecenas et lacus varius, lobortis dolor eu, venenatis mauris. Sed id nunc risus.</p>\n<p>Duis efficitur nisl vel neque posuere pellentesque. Praesent bibendum justo dolor, eget congue elit finibus vel. Quisque scelerisque et odio cursus suscipit. Aenean et rhoncus sapien. Suspendisse eget elit et arcu luctus tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sed sollicitudin massa. Phasellus lobortis lobortis nibh, id rhoncus lectus posuere a. Integer in tincidunt mi. Fusce tincidunt lorem eu leo rhoncus tristique. Sed dignissim lacus sit amet consectetur volutpat. Aenean hendrerit molestie neque, sed accumsan sem finibus sed. Donec ut sem nulla. Phasellus volutpat leo et egestas viverra.</p>\n<p>Nunc et tortor vel massa tempus gravida eget vitae augue. Duis vitae diam leo. Aenean nec lorem id libero euismod sodales. Donec ac elit vel nisi commodo dignissim id vel augue. Nulla sed massa vitae mi aliquet faucibus. Maecenas scelerisque ex id venenatis euismod. Maecenas vel lectus congue, congue dolor in, pellentesque nibh.</p>\n<p>Fusce congue arcu purus, eu lobortis ex pretium in. Proin ultricies velit dolor, vitae vestibulum ante sodales vitae. In hac habitasse platea dictumst. Vivamus molestie mi sed ipsum scelerisque condimentum. Ut ultricies turpis id erat ornare, ut congue mauris facilisis. Fusce molestie turpis sit amet dictum varius. Proin fermentum turpis neque, sit amet placerat neque varius eget. Cras tempor lorem nec ipsum tincidunt gravida. Quisque sit amet erat dictum, consectetur metus eget, viverra libero. Ut molestie tempor consectetur. Maecenas et consectetur nibh. Aliquam placerat ultrices placerat. Proin feugiat pulvinar lacus et tempor. Suspendisse facilisis nulla fringilla lacus elementum euismod. Integer arcu urna, ultrices scelerisque tempor posuere, convallis eu felis. Aliquam in venenatis massa.</p>\n<p>Donec ultricies nibh nec justo vestibulum varius. Nullam ornare mattis diam interdum faucibus. Mauris ut lobortis sapien. Aliquam erat volutpat. Nunc porta gravida quam, at tristique eros faucibus sit amet. Quisque vel velit posuere, varius est et, congue libero. Sed lobortis dolor orci, at luctus lorem posuere at. Pellentesque ut ligula interdum diam tempus accumsan. Duis sollicitudin erat a lobortis mattis. Cras sit amet scelerisque ex. Morbi condimentum, orci ac mollis rhoncus, urna diam dignissim mi, ut aliquet metus magna vel mauris. Morbi vitae sodales eros, eget aliquet dui.</p>",
        feature: {
            "side-b": true
        }
    }
];

async function seedDB() {
    try {
        await Models.Post.deleteMany({});
        for (const seed of seeds) {
            await Models.Post.create(seed);
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports = seedDB;