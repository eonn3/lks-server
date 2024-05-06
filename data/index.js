import mongoose from "mongoose";

export const about = [
    {
        _id: new mongoose.Types.ObjectId(),
        schoolDescription: "A mission, non-profit, non-sectarian early childhood educational institution committed to train and develop children spiritually, mentally, physically and socially for God's glory.",
        phoneNumber: "09300432427",
        email: "gloegaa@yahoo.co.uk",
        address: "Calatrava, Romblon, Philippines",
        facebook: "https://www.facebook.com/share/E2q3qWM9CFcabGdu/?mibextid=A7sQZp"
    }
]

export const admin = [
    {
        _id: new mongoose.Types.ObjectId(),
        username: "LKSAdmin",
        password: "Tr@1nUpACh1ld"
    }
]

export const faculty = [
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Gloria F. Gaa",
        title: "Director",
        image: "Director Gloria F. Gaa.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Delia F. Fajutagana",
        title: "Principal",
        image: "Principal Delia F. Fajutagana.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Geraldine M. De la Cruz",
        title: "Teacher",
        image: "Teacher Geraldine M. De la Cruz.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Judy Ann M. Mariano",
        title: "Teacher",
        image: "Teacher Judy Ann M. Mariano.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Maricel M. Falcutila",
        title: "Teacher",
        image: "Teacher Maricel M. Falcutila.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Ria Ann M. Falsado",
        title: "Teacher",
        image: "Teacher Ria Ann M. Falsado.jpg"
    }
]

export const blogs = [
    {
        _id: new mongoose.Types.ObjectId(),
        title: "LKS Students Participate in Children's Month Celebration 2023",
        text: "Last November 24, 2023, the Calatrava Cultural and Sports Complex buzzed with excitement as the LDF-LCFI-Lamp Kiddie School took center stage at the National Children's Month Celebration. Under the theme 'Kalusugan Paunlarin, Tirahan Tiyakin, Karapatan Na Mabuhay Para Sa Lahat,' the event was not just a showcase of talent but a celebration of unity and achievement.\n\nLeading the charge was Janella Maureen M. Famaran, whose heartfelt Opening Prayer set the tone for the day. Among the standout performances was Malik Dale R. Falcutila's captivating Draw & Tell routine, earning him the coveted First Place. Additionally, the Zumba/Calisthenics team claimed Second Place, showcasing their dedication and skill. Even in the Photobooth category, there was recognition, demonstrating the school's versatility and creativity.\n\nThis triumph wasn't solely the result of individual efforts but a collective endeavor. The pupils, parents, teachers, and staff of Lamp Kiddie School united to make this success possible. Their unwavering support and participation underscored the school's ethos of community and collaboration.\n\nIn particular, the Zumba/Calisthenics dancers brought pride to Lamp Kiddie School with their energetic performance. Their Second Place win was not just a testament to their talent but a reflection of the dedication instilled in them by their supportive parents and teachers. It's a reminder of the profound impact of nurturing and guiding children towards their fullest potential.\n\nAs Proverbs 22:6 wisely states, 'Train up a child in a way he should go; and when he is old he will not depart from it.' The success of Lamp Kiddie School at the National Children's Month Celebration is a testament to the enduring value of providing children with not just education but also support, encouragement, and opportunities to shine. Congratulations to all involved, and may this achievement be the first of many to come.",
        image: "405560082_24182548111390879_8672123614089479160_n.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Celebrating the winners of the IFL 2024 Annual Competition!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mauris rutrum, lacinia nisl ut, ultrices dolor. Sed fermentum, dolor vitae dignissim placerat, ipsum ipsum volutpat velit, non maximus nisl velit in felis. Duis in libero id quam aliquet varius id et lorem. Fusce finibus quam pellentesque mi rhoncus, et auctor enim tempus. Praesent facilisis, ante ac maximus volutpat, nisi felis maximus orci, non venenatis lorem augue at elit. Etiam consectetur nulla et tempor pellentesque. Morbi non ullamcorper dolor, laoreet imperdiet metus. Sed bibendum condimentum nibh ac sodales. Morbi eget nunc lectus. Mauris vehicula vehicula metus, et lacinia massa blandit sit amet.\n\nMauris varius magna id pretium blandit. Mauris a nibh nibh. In ut tellus elementum, malesuada ipsum sit amet, vulputate ante. Morbi libero felis, pellentesque nec convallis eget, egestas eget felis. Morbi convallis velit sed dui convallis, quis semper nisi tempor. Cras ut dictum quam. Nulla convallis magna vehicula, pellentesque nulla vitae, euismod quam. Proin faucibus, dui vitae lobortis rutrum, nisi ipsum ultricies purus, nec varius lorem ex at justo. Curabitur quis vestibulum dolor. Sed dictum suscipit justo, non laoreet mauris rhoncus vel.\n\nMauris molestie augue quis consequat efficitur. Aliquam erat volutpat. Phasellus maximus volutpat mattis. Vivamus non aliquet elit, vel porta neque. Pellentesque efficitur lectus a pulvinar mattis. Pellentesque dignissim sagittis vehicula. Integer semper odio at leo tempor, sed viverra nulla molestie. Pellentesque eu leo ipsum. Quisque mi augue, bibendum sed nisi in, pulvinar congue dolor. Praesent cursus nec sapien aliquam viverra. Donec quis iaculis lectus. Donec rutrum vestibulum enim eu interdum. Pellentesque et placerat felis. Suspendisse tincidunt cursus orci, a dapibus nibh consectetur in. Nulla purus velit, placerat at euismod et, placerat id velit.",
        image: "434345948_7086907948097752_1692740986580297008_n.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Congratulations to our graduates!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mauris rutrum, lacinia nisl ut, ultrices dolor. Sed fermentum, dolor vitae dignissim placerat, ipsum ipsum volutpat velit, non maximus nisl velit in felis. Duis in libero id quam aliquet varius id et lorem. Fusce finibus quam pellentesque mi rhoncus, et auctor enim tempus. Praesent facilisis, ante ac maximus volutpat, nisi felis maximus orci, non venenatis lorem augue at elit. Etiam consectetur nulla et tempor pellentesque. Morbi non ullamcorper dolor, laoreet imperdiet metus. Sed bibendum condimentum nibh ac sodales. Morbi eget nunc lectus. Mauris vehicula vehicula metus, et lacinia massa blandit sit amet.\n\nMauris varius magna id pretium blandit. Mauris a nibh nibh. In ut tellus elementum, malesuada ipsum sit amet, vulputate ante. Morbi libero felis, pellentesque nec convallis eget, egestas eget felis. Morbi convallis velit sed dui convallis, quis semper nisi tempor. Cras ut dictum quam. Nulla convallis magna vehicula, pellentesque nulla vitae, euismod quam. Proin faucibus, dui vitae lobortis rutrum, nisi ipsum ultricies purus, nec varius lorem ex at justo. Curabitur quis vestibulum dolor. Sed dictum suscipit justo, non laoreet mauris rhoncus vel.\n\nMauris molestie augue quis consequat efficitur. Aliquam erat volutpat. Phasellus maximus volutpat mattis. Vivamus non aliquet elit, vel porta neque. Pellentesque efficitur lectus a pulvinar mattis. Pellentesque dignissim sagittis vehicula. Integer semper odio at leo tempor, sed viverra nulla molestie. Pellentesque eu leo ipsum. Quisque mi augue, bibendum sed nisi in, pulvinar congue dolor. Praesent cursus nec sapien aliquam viverra. Donec quis iaculis lectus. Donec rutrum vestibulum enim eu interdum. Pellentesque et placerat felis. Suspendisse tincidunt cursus orci, a dapibus nibh consectetur in. Nulla purus velit, placerat at euismod et, placerat id velit.",
        image: "284349468_4930627700392465_8674839812736630824_n.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "LKS Pupils Go on a Field Trip",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mauris rutrum, lacinia nisl ut, ultrices dolor. Sed fermentum, dolor vitae dignissim placerat, ipsum ipsum volutpat velit, non maximus nisl velit in felis. Duis in libero id quam aliquet varius id et lorem. Fusce finibus quam pellentesque mi rhoncus, et auctor enim tempus. Praesent facilisis, ante ac maximus volutpat, nisi felis maximus orci, non venenatis lorem augue at elit. Etiam consectetur nulla et tempor pellentesque. Morbi non ullamcorper dolor, laoreet imperdiet metus. Sed bibendum condimentum nibh ac sodales. Morbi eget nunc lectus. Mauris vehicula vehicula metus, et lacinia massa blandit sit amet.\n\nMauris varius magna id pretium blandit. Mauris a nibh nibh. In ut tellus elementum, malesuada ipsum sit amet, vulputate ante. Morbi libero felis, pellentesque nec convallis eget, egestas eget felis. Morbi convallis velit sed dui convallis, quis semper nisi tempor. Cras ut dictum quam. Nulla convallis magna vehicula, pellentesque nulla vitae, euismod quam. Proin faucibus, dui vitae lobortis rutrum, nisi ipsum ultricies purus, nec varius lorem ex at justo. Curabitur quis vestibulum dolor. Sed dictum suscipit justo, non laoreet mauris rhoncus vel.\n\nMauris molestie augue quis consequat efficitur. Aliquam erat volutpat. Phasellus maximus volutpat mattis. Vivamus non aliquet elit, vel porta neque. Pellentesque efficitur lectus a pulvinar mattis. Pellentesque dignissim sagittis vehicula. Integer semper odio at leo tempor, sed viverra nulla molestie. Pellentesque eu leo ipsum. Quisque mi augue, bibendum sed nisi in, pulvinar congue dolor. Praesent cursus nec sapien aliquam viverra. Donec quis iaculis lectus. Donec rutrum vestibulum enim eu interdum. Pellentesque et placerat felis. Suspendisse tincidunt cursus orci, a dapibus nibh consectetur in. Nulla purus velit, placerat at euismod et, placerat id velit.",
        image: "51429953_1958876030900995_6602280128921731072_n.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "LKS Spelling Bee Competition",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mauris rutrum, lacinia nisl ut, ultrices dolor. Sed fermentum, dolor vitae dignissim placerat, ipsum ipsum volutpat velit, non maximus nisl velit in felis. Duis in libero id quam aliquet varius id et lorem. Fusce finibus quam pellentesque mi rhoncus, et auctor enim tempus. Praesent facilisis, ante ac maximus volutpat, nisi felis maximus orci, non venenatis lorem augue at elit. Etiam consectetur nulla et tempor pellentesque. Morbi non ullamcorper dolor, laoreet imperdiet metus. Sed bibendum condimentum nibh ac sodales. Morbi eget nunc lectus. Mauris vehicula vehicula metus, et lacinia massa blandit sit amet.\n\nMauris varius magna id pretium blandit. Mauris a nibh nibh. In ut tellus elementum, malesuada ipsum sit amet, vulputate ante. Morbi libero felis, pellentesque nec convallis eget, egestas eget felis. Morbi convallis velit sed dui convallis, quis semper nisi tempor. Cras ut dictum quam. Nulla convallis magna vehicula, pellentesque nulla vitae, euismod quam. Proin faucibus, dui vitae lobortis rutrum, nisi ipsum ultricies purus, nec varius lorem ex at justo. Curabitur quis vestibulum dolor. Sed dictum suscipit justo, non laoreet mauris rhoncus vel.\n\nMauris molestie augue quis consequat efficitur. Aliquam erat volutpat. Phasellus maximus volutpat mattis. Vivamus non aliquet elit, vel porta neque. Pellentesque efficitur lectus a pulvinar mattis. Pellentesque dignissim sagittis vehicula. Integer semper odio at leo tempor, sed viverra nulla molestie. Pellentesque eu leo ipsum. Quisque mi augue, bibendum sed nisi in, pulvinar congue dolor. Praesent cursus nec sapien aliquam viverra. Donec quis iaculis lectus. Donec rutrum vestibulum enim eu interdum. Pellentesque et placerat felis. Suspendisse tincidunt cursus orci, a dapibus nibh consectetur in. Nulla purus velit, placerat at euismod et, placerat id velit.",
        image: "284349468_4930627700392465_8674839812736630824_n.jpg"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Snack time at LKS!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mauris rutrum, lacinia nisl ut, ultrices dolor. Sed fermentum, dolor vitae dignissim placerat, ipsum ipsum volutpat velit, non maximus nisl velit in felis. Duis in libero id quam aliquet varius id et lorem. Fusce finibus quam pellentesque mi rhoncus, et auctor enim tempus. Praesent facilisis, ante ac maximus volutpat, nisi felis maximus orci, non venenatis lorem augue at elit. Etiam consectetur nulla et tempor pellentesque. Morbi non ullamcorper dolor, laoreet imperdiet metus. Sed bibendum condimentum nibh ac sodales. Morbi eget nunc lectus. Mauris vehicula vehicula metus, et lacinia massa blandit sit amet.\n\nMauris varius magna id pretium blandit. Mauris a nibh nibh. In ut tellus elementum, malesuada ipsum sit amet, vulputate ante. Morbi libero felis, pellentesque nec convallis eget, egestas eget felis. Morbi convallis velit sed dui convallis, quis semper nisi tempor. Cras ut dictum quam. Nulla convallis magna vehicula, pellentesque nulla vitae, euismod quam. Proin faucibus, dui vitae lobortis rutrum, nisi ipsum ultricies purus, nec varius lorem ex at justo. Curabitur quis vestibulum dolor. Sed dictum suscipit justo, non laoreet mauris rhoncus vel.\n\nMauris molestie augue quis consequat efficitur. Aliquam erat volutpat. Phasellus maximus volutpat mattis. Vivamus non aliquet elit, vel porta neque. Pellentesque efficitur lectus a pulvinar mattis. Pellentesque dignissim sagittis vehicula. Integer semper odio at leo tempor, sed viverra nulla molestie. Pellentesque eu leo ipsum. Quisque mi augue, bibendum sed nisi in, pulvinar congue dolor. Praesent cursus nec sapien aliquam viverra. Donec quis iaculis lectus. Donec rutrum vestibulum enim eu interdum. Pellentesque et placerat felis. Suspendisse tincidunt cursus orci, a dapibus nibh consectetur in. Nulla purus velit, placerat at euismod et, placerat id velit.",
        image: "45390542_1837419836379949_3116084170082746368_n.jpg"
    }
]

export const testimonials = [
    {
        name: "Rosita Matre",
        applicantType: "Parent",
        email: "rosita@email.com",
        contactNumber: "09123456789",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: true
    },
    {
        name: "Stephen Jose",
        applicantType: "Parent",
        email: "stephenj@email.com",
        contactNumber: "09123456789",
        text: "Nulla facilisi. Vivamus lacinia arcu vitae ex rutrum, vel accumsan ligula elementum.",
        status: true
    },
    {
        name: "Juan Fondevilla",
        applicantType: "Parent",
        email: "jfondevilla@email.com",
        contactNumber: "09123456789",
        text: "Nulla facilisi. Vivamus lacinia arcu vitae ex rutrum, vel accumsan ligula elementum.",
        status: true
    },
    {
        name: "Janet Fabello",
        applicantType: "Parent",
        email: "jfab@email.com",
        contactNumber: "09123456789",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: false
    },
    {
        name: "Olive J. Fetalvero",
        applicantType: "Alum",
        email: "olivejfetalvero@email.com",
        contactNumber: "09123456789",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: true
    },
    {
        name: "Princess Fiedacan",
        applicantType: "Alum",
        email: "princess.fiedacan@email.com",
        contactNumber: "09123456789",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: true
    },
    {
        name: "Paul Ferancullo",
        applicantType: "Alum",
        email: "ferancullo.p@email.com",
        contactNumber: "09123456789",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: true
    },
    {
        name: "Hilda Villanueva",
        applicantType: "Alum",
        email: "hilda@email.com",
        contactNumber: "09123456789",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: false
    }
]