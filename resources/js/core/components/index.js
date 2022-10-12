// Importing third party components
import Multiselect from 'vue-multiselect'
import FlatPickr from 'vue-flatpickr-component'
import { FadeTransition, CollapseTransition } from "vue2-transitions"
import { BTable } from 'bootstrap-vue'

// Importing common components
import AnimatedLoader from "./AnimatedLoader"
import Progress from "./Progress"
import BackToTop from "./BackToTop"
import Badge from "./Badge"
import BaseAlert from "./BaseAlert"
import BaseButton from "./BaseButton"
import BaseContainer from "./BaseContainer"
import BaseCheckbox from "./BaseCheckbox"
import BaseDropdown from "./BaseDropdown"
import ButtonDropdown from "./ButtonDropdown"
import BaseInput from "./BaseInput"
import BaseTextarea from "./BaseTextarea"
import BaseNav from "./BaseNav"
import BaseProgress from "./BaseProgress"
import BaseRadio from "./BaseRadio"
import BaseSlider from "./BaseSlider"
import BaseSwitch from "./BaseSwitch"
import BaseSelect from "./BaseSelect"
import Card from "./Card"
import DateBetween from "./DateBetween"
import Icon from "./Icon"

import MultiselectWrapper from "./MultiselectWrapper"

import SwitchWrapper from "./SwitchWrapper"
import FeedWrapper from "./FeedWrapper"
import TableWrapper from "./TableWrapper"
import TransitionPage from "./TransitionPage"
import CloseButton from "./CloseButton"

import ViewSingle from "./ViewSingle"
import ViewDate from "./ViewDate"
import ViewParagraph from "./ViewParagraph"
import ViewUploads from "./ViewUploads"
import ViewHtml from "./ViewHtml"
import ViewList from "./ViewList"
import ViewCurrency from "./ViewCurrency"

export default {
    install(Vue) {
        // Registering third party components
        Vue.component('multiselect', Multiselect)
        Vue.component('date-picker', FlatPickr)
        Vue.component('b-table', BTable)
        Vue.component('fade-transition', FadeTransition)
        Vue.component('collapse-transition', CollapseTransition)

        // Registering custom components
        Vue.component(AnimatedLoader.name, AnimatedLoader)
        Vue.component(Progress.name, Progress)
        Vue.component(BackToTop.name, BackToTop)
        Vue.component(Badge.name, Badge)
        Vue.component(BaseAlert.name, BaseAlert)
        Vue.component(BaseButton.name, BaseButton)
        Vue.component(BaseContainer.name, BaseContainer)
        Vue.component(BaseDropdown.name, BaseDropdown)
        Vue.component(ButtonDropdown.name, ButtonDropdown)
        Vue.component(BaseInput.name, BaseInput)
        Vue.component(BaseTextarea.name, BaseTextarea)
        Vue.component(BaseNav.name, BaseNav)
        Vue.component(BaseCheckbox.name, BaseCheckbox)
        Vue.component(BaseProgress.name, BaseProgress)
        Vue.component(BaseRadio.name, BaseRadio)
        Vue.component(BaseSlider.name, BaseSlider)
        Vue.component(BaseSwitch.name, BaseSwitch)
        Vue.component(BaseSelect.name, BaseSelect)
        Vue.component(Card.name, Card)
        Vue.component(DateBetween.name, DateBetween)
        Vue.component(Icon.name, Icon)
        Vue.component(SwitchWrapper.name, SwitchWrapper)
        Vue.component(MultiselectWrapper.name, MultiselectWrapper)

        Vue.component(TableWrapper.name, TableWrapper)
        Vue.component(TransitionPage.name, TransitionPage)
        Vue.component(FeedWrapper.name, FeedWrapper)
        Vue.component(CloseButton.name, CloseButton)

        Vue.component(ViewSingle.name, ViewSingle)
        Vue.component(ViewDate.name, ViewDate)
        Vue.component(ViewParagraph.name, ViewParagraph)
        Vue.component(ViewUploads.name, ViewUploads)
        Vue.component(ViewHtml.name, ViewHtml)
        Vue.component(ViewList.name, ViewList)
        Vue.component(ViewCurrency.name, ViewCurrency)

        Vue.prototype.$toastConfig = toastConfig
    }
}
