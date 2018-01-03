<template>
  <div id="app">
    <header class="page-header">
      <div class="wrap">
        <h2 class="main-title title is-2">v-suggestions</h2>
        <span class="caption">Automatic suggestions with custom templates</span>
      </div>
    </header>
    <div class="container">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <div class="columns">
            <div class="column is-12">
              <h4 class="title is-4">Installation</h4>
              <pre>npm install v-suggestions --save</pre>
              <p><strong>OR you can use yarn</strong></p>
              <pre>yarn add v-suggestions</pre>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h5 class="title is-5">Simple Example</h5>
              <div class="columns">
                <div class="column">
                  <suggestions
                    ref="countrySuggestions"
                    v-model="query"
                    :options="options"
                    :onInputChange="onCountryInputChange">
                  </suggestions>
                </div>
                <div class="column">
                  <pre>{{query}}</pre>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">

              <pre style='color:#000020;background:#f6f8ff;'><span style='color:#308080; '>&lt;</span>suggestions
    v<span style='color:#308080; '>-</span>model<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>query</span><span
                  style='color:#800000; '>"</span>
    <span style='color:#406080; '>:</span>options<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>options</span><span
                  style='color:#800000; '>"</span>
    <span style='color:#406080; '>:</span>onInputChange<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>onCountryInputChange</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span>
</pre>

              <pre>
                <code class="language-javascript">
  export default {
    data () {
      let countries = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'AndorrA', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, The Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote D\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India']
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
  }</code></pre>
            </div>
          </div>

          <h5 class="title is-5">Custom template</h5>
          <div class="columns">
            <div class="column is-6">
              <suggestions
                v-model="query"
                :options="options"
                :onInputChange="onCountryInputChange">
                <div slot="item" slot-scope="props" class="single-item">
                  <strong>Name: {{props.item}}</strong>
                </div>
              </suggestions>
            </div>
            <div class="column is-6">
              <pre>{{query}}</pre>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <pre style='color:#000020;background:#f6f8ff;'><span style='color:#308080; '>&lt;</span>suggestions
  v<span style='color:#308080; '>-</span>model<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>query</span><span
                  style='color:#800000; '>"</span>
  <span style='color:#406080; '>:</span>options<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>options</span><span
                  style='color:#800000; '>"</span>
  <span style='color:#406080; '>:</span>onInputChange<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>onCountryInputChange</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span>
  <span style='color:#308080; '>&lt;</span>div slot<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>item</span><span
                  style='color:#800000; '>"</span> slot<span style='color:#308080; '>-</span>scope<span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>props</span><span
                  style='color:#800000; '>"</span> <span style='color:#200080; font-weight:bold; '>class</span><span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>single-item</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span>
    <span style='color:#308080; '>&lt;</span>strong<span style='color:#308080; '>></span>Name<span
                  style='color:#406080; '>:</span> <span style='color:#406080; '>{</span><span
                  style='color:#406080; '>{</span>props<span style='color:#308080; '>.</span><span
                  style='color:#200080; font-weight:bold; '>item</span><span style='color:#406080; '>}</span><span
                  style='color:#406080; '>}</span><span style='color:#308080; '>&lt;</span><span
                  style='color:#308080; '>/</span>strong<span style='color:#308080; '>></span>
  <span style='color:#308080; '>&lt;</span><span style='color:#308080; '>/</span>div<span
                  style='color:#308080; '>></span>
<span style='color:#308080; '>&lt;</span><span style='color:#308080; '>/</span>suggestions<span style='color:#308080; '>></span>
</pre>
            </div>
          </div>

          <h5 class="title is-5">Ajax based results with custom template (Duckduckgo API)</h5>
          <div class="columns">
            <div class="column is-6">
              <suggestions
                ref="completor"
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
            </div>
            <div class="column is-6">
              <pre>{{selectedSearchItem}}</pre>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <pre style='color:#000020;background:#f6f8ff;'><span style='color:#308080; '>&lt;</span>suggestions
  v<span style='color:#308080; '>-</span>model<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>searchQuery</span><span
                  style='color:#800000; '>"</span>
  <span style='color:#406080; '>:</span>options<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>searchOptions</span><span
                  style='color:#800000; '>"</span>
  <span style='color:#406080; '>:</span>onItemSelected<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>onSearchItemSelected</span><span
                  style='color:#800000; '>"</span>
  <span style='color:#406080; '>:</span>onInputChange<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>onInputChange</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span>
  <span style='color:#308080; '>&lt;</span>div slot<span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>item</span><span
                  style='color:#800000; '>"</span> slot<span style='color:#308080; '>-</span>scope<span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>props</span><span
                  style='color:#800000; '>"</span> <span style='color:#200080; font-weight:bold; '>class</span><span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>single-item</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span>
    <span style='color:#308080; '>&lt;</span>template v<span style='color:#308080; '>-</span><span
                  style='color:#200080; font-weight:bold; '>if</span><span style='color:#308080; '>=</span><span
                  style='color:#800000; '>"</span><span style='color:#1060b6; '>props.item.Icon &amp;&amp; props.item.Icon.URL</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span>
      <span style='color:#308080; '>&lt;</span>div <span style='color:#200080; font-weight:bold; '>class</span><span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>image-wrap</span><span
                  style='color:#800000; '>"</span> <span style='color:#406080; '>:</span>style<span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>{'backgroundImage': 'url('+ props.item.Icon.URL + ')' }</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span><span style='color:#308080; '>&lt;</span><span
                  style='color:#308080; '>/</span>div<span style='color:#308080; '>></span>
    <span style='color:#308080; '>&lt;</span><span style='color:#308080; '>/</span>template<span
                  style='color:#308080; '>></span>
    <span style='color:#308080; '>&lt;</span>span <span style='color:#200080; font-weight:bold; '>class</span><span
                  style='color:#308080; '>=</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>name</span><span
                  style='color:#800000; '>"</span><span style='color:#308080; '>></span><span
                  style='color:#406080; '>{</span><span style='color:#406080; '>{</span>props<span
                  style='color:#308080; '>.</span><span style='color:#200080; font-weight:bold; '>item</span><span
                  style='color:#308080; '>.</span>Text<span style='color:#406080; '>}</span><span
                  style='color:#406080; '>}</span><span style='color:#308080; '>&lt;</span><span
                  style='color:#308080; '>/</span>span<span style='color:#308080; '>></span>
  <span style='color:#308080; '>&lt;</span><span style='color:#308080; '>/</span>div<span
                  style='color:#308080; '>></span>
<span style='color:#308080; '>&lt;</span><span style='color:#308080; '>/</span>suggestions<span style='color:#308080; '>></span>
</pre>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
                <pre><code class="language-javascript">export default {
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
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Suggestions from '../dist/v-suggestions'
  import '../dist/v-suggestions.css'

  import axios from 'axios'

  export default {
    name: 'app',
    data () {
      let countries = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'AndorrA', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, The Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote D\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran, Islamic Republic Of', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, Democratic People\'S Republic of Korea, Republic of Kuwait', 'Kyrgyzstan', 'Lao People\'S Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territory, Occupied', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'RWANDA', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Viet Nam', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']
      return {
        items: [1, 2, 3, 4, 5],
        query: '',
        searchQuery: '',
        countries: countries,
        selectedCountry: null,
        selectedSearchItem: null,
        options: {},
        searchOptions: {
          placeholder: 'Try seaching "Guardians"',
          debounce: 400
        }
      }
    },
    mounted () {
    },
    methods: {
      onCountryInputChange (query) {
        if (query.trim().length === 0) {
          return null
        }
        return this.countries.filter((country) => {
          return country.toLowerCase().includes(query.toLowerCase())
        })
      },
      onCountrySelected (item) {
        this.selectedCountry = item
      },
      onInputChange (query) {
        if (query.trim().length === 0) {
          return null
        }
        const url = `https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`
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
    },
    components: {
      Suggestions
    }
  }
</script>

<style>

  .page-header {
    height: 300px;
    background: #41b882; /* Old browsers */
    background: -moz-linear-gradient(top, #41b882 0%, #337c8e 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #41b882 0%, #337c8e 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #41b882 0%, #337c8e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#41b882', endColorstr='#337c8e', GradientType=0); /* IE6-9 */
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .page-header .wrap {
    margin: 0 auto;
    width: 100%;
    color: #f8f8f8;
  }

  .page-header .wrap .main-title {
    color: #f8f8f8;
    font-weight: bold;
    text-shadow: 1px 1px 1px #333;
  }

  .title {
    font-weight: normal;
  }

  .completor .item {

  }

  .single-item {
    overflow: hidden;
    position: relative;
  }

  .image-wrap {
    width: 80px;
    height: 80px;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    float: left;
    margin-right: 1em;
  }

  .single-item .name {
    /*float: left;*/
  }

  #app .token.number {
    font-size-adjust: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 290486px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1em;
    height: auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 0rem;
    min-width: auto;
    padding: 0rem;
    text-align: center;
    vertical-align: top;
  }

  #app {
    padding-bottom: 300px;
  }

  #app code[class*=language-], pre[class*=language-] {
    font-family: monospace;
  }
</style>
