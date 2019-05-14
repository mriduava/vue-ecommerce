


// new Vue({
//   el: '#root',
//   data: {
//     story: {content: {body: []}}
//   },
//   created: function() {
//     var that = this

//     function getStory(version) {
//       storyblok.get({slug: 'vue', version: version}, function(data) {
//         that.story = {content: {body: []}}
//         that.$nextTick(function() {
//           that.story = data.story
//         })
//       })
//     }

//     storyblok.init({
//       accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt'
//     })

//     getStory('draft')
//   }
// })