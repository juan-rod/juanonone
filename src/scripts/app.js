import data from '../data/resources.json';


const parentElement = document.querySelector('main')
const key = Object.keys(data)

function getData () {
  key.forEach(key => {
    console.log('key', key)
    const section = document.createElement('section')
    section.className=`week${key}`
    let sectionTitle = (key === 'misc') ? key : `week_${key}`
    section.innerHTML = `<h2>${sectionTitle}</h2> <ul></ul>`
    parentElement.appendChild(section)
    data[key].forEach(item => {
      const resourceElement = document.querySelector(`.week${key} ul`)
      const resourceElementList = document.createElement('li')
      resourceElementList.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`
      resourceElement.appendChild(resourceElementList)
    })
  })
}
function groupDataByTag() {
  function refactorDataByWeek (acc , resource) {
    let tagNames = tags.filter(tag => resource.tags.includes(tag))
    tagNames = tagNames.length > 0 ? tagNames : ['misc']
    tagNames.forEach(tag => acc[tag] = (acc[tag] || []).concat(resource))
    return acc
  }
  function getTags (acc, tag) {
    return acc.concat(tag)
  }
  function removeDuplicates (tags) {
    return Array.from(new Set(tags))
  }

  let tagList = data[key].map(item => item.tags)

  let tags = tagList.reduce(getTags, [])
    tags = removeDuplicates(tags)
  let groupedByTag = data[key].reduce(refactorDataByWeek, [])
  console.log('groupedByTag', groupedByTag)
  return groupedByTag
}
getData()
groupDataByTag()