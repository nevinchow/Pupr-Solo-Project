'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      */
   return queryInterface.bulkInsert('Photos', [
     {name: "", imageUrl: "http://thecatandthedog.com/wp-content/uploads/2020/11/105992231-1561667465295gettyimages-521697453.jpeg", userId: 1,  createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://static.independent.co.uk/2021/07/01/23/SEI85370452.jpg?width=982&height=726&auto=webp&quality=75", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bPF20leczByYgHOVHOg3b2mZjwMKmWxGvQ&usqp=CAU", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://s3-prod.adage.com/s3fs-public/CurrentStudios_CandidCatmera16.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7O7TobL8nNWXAJ_XKn2INGKbn_BJWGiAQ1g&usqp=CAU", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://www.news10.com/wp-content/uploads/sites/64/2019/04/dogs-cats-pets_1533585847599_392016_ver1.0_50914691_ver1.0.gif", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://media.npr.org/assets/img/2021/04/27/prancer_wide-db59609b5bd96c9e56e4dfe32d198461197880c2.jpg?s=1400", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/210217142446-03-finn-rabbit-support-large-169.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCC4squwzXz2nJjoLg54HZI__bsl39JUc6NQ&usqp=CAU", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://static.thebark.com/sites/default/files/content/article/thumb/dogzoomiesericsonstroem.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://i.pinimg.com/originals/1f/42/29/1f4229a066cd0b9438a71f9c228cf309.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://i.ytimg.com/vi/kZw-jgCRPeE/maxresdefault.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://static.wikia.nocookie.net/scoobydoo/images/5/53/Scooby-Doo.png", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://decider.com/wp-content/uploads/2020/03/appa-and-momo-last-airbender.jpg?quality=80&strip=all", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://www.zenrooms.com/blog/wp-content/uploads/2020/05/funny-cats-2-1280x720.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://www.thehealthytails.com/uploads/healthytails/images/27c3475ecd94e215e1edd9d1babb95dd-608093_m.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C_FT.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://4.bp.blogspot.com/-4bye8tSACZY/TfL-qzJQShI/AAAAAAAAAuA/LE-9ig5Vz-M/s640/funny+and+cute+dogs+and+puppies+2.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://dogtime.com/assets/uploads/2012/05/dog-bathing-e1571421548676.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: "", imageUrl: "https://www.drmartybecker.com/wp-content/uploads/2018/05/bigstock-178717285.jpg", userId: 1, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
