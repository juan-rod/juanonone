import data from '../data/resources.json';


const parentElement = document.querySelector('main')

function getData () {
  const dataKeys = Object.keys(data)
  dataKeys.forEach(key => {
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
getData()