# v-suggestions

> suggestions with custom templates

## Installation

``` bash
# npm
npm install v-suggestion

# yarn
yarn add v-suggestion

```
```javascript
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css' // you can import the stylesheets also (optional)
Vue.component('suggestions', Suggestions)
```
Component supports Vue 2.1.0+ version. v-suggetions uses slot-scope based templates for customizing suggestions.
## Demo
[Online demo](https://anjaneyasivan.github.io/v-suggestions/) is also available!

## User Guide
| Property  | Type   | Description |
|-----------|-----------|-------------|
| v-model | String | an empty or predefined string as search query|
| onInputChange      | Function | When the search query is changed, this function will be trigerred. The function should return an array of objects for the Component to render. It can also return a Promise instead of a set of objects. AJAX calls or delays can be addressed. |
| onItemSelected | Function (optional)| When user selects (clicks or presses enter on an item), this function will be called |
| options | Object | A set of options for customization of the component|
| options.debounce | Integer | A delay in milliseconds between each "onInputChange" events. If unspecified, it will be ignored. Comes in handy for ajax requests. See examples. |
|options.placeholder | string | A placeholder string for search (optional) |
|options.inputClass | string | Override classnames given to the input text element (optional) |

## Simple Example
```html
<suggestions
    v-model="query"
    :options="options"
    :onInputChange="onCountryInputChange">
```

```javascript
 export default {
  data () {
    let countries = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'AndorrA', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize']
    return {
      query: '',
      countries: countries,
      selectedCountry: null,
      options: {}
    }
  },
  methods: {
    onCountryInputChange (query) {
      if (query.trim().length === 0) {
        return null
      }
      // return the matching countries as an array
      return this.countries.filter((country) => {
        return country.toLowerCase().includes(query.toLowerCase())
      })
    },
    onCountrySelected (item) {
      this.selectedCountry = item
    },
    onSearchItemSelected (item) {
      this.selectedSearchItem = item
    }
  }
}
```

## Ajax based results with custom template (Duckduckgo API)

```html
<suggestions
  v-model="searchQuery"
  :options="searchOptions"
  :onItemSelected="onSearchItemSelected"
  :onInputChange="onInputChange">
  <div slot="item" slot-scope="props" class="single-item">
    <template v-if="props.item.Icon && props.item.Icon.URL">
      <div class="image-wrap" :style="{'backgroundImage': 'url('+ props.item.Icon.URL + ')' }"></div>
    </template>
    <span class="name">{{props.item.Text}}</span>
  </div>
</suggestions>
```
```javascript
export default {
  data () {
    return {
      searchQuery: '',
      selectedSearchItem: null,
      options: {}
    }
  },
  methods: {
    onInputChange (query) {
      if (query.trim().length === 0) {
        return null
      }
      const url = `http://api.duckduckgo.com/?q=${query}&format=json&pretty=1`
      return new Promise(resolve => {
        axios.get(url).then(response => {
          const items = []
          response.data.RelatedTopics.forEach((item) => {
            if (item.Text) {
              items.push(item)
            } else if (item.Topics && item.Topics.length > 0) {
              item.Topics.forEach(topic => {
                items.push(topic)
              })
            }
          })
          resolve(items)
        })
      })
    },
    onSearchItemSelected (item) {
      this.selectedSearchItem = item
    }
  }
}
```
