import i18n, { i18nGroup } from '../../lib/index'

const name = 'Steffen'
const amount = 1250.33

@i18nGroup('custom group')
export default class GroupedClass {
    getText() {
        return this.i18n`Hello ${name}, you have ${amount}:c in your bank account.`
    }

    getCommonText() {
        return i18n('common')`Hello ${name}, you have ${amount}:c in your bank account.`
    }
}

class GroupedClass2 {
    getText() {
        return this.i18n`Hello ${name}, you have ${amount}:c in your bank account.`
    }

    getCommonText() {
        return i18n('common 2') `Hello ${name}, you have ${amount}:c in your bank account.`
    }
}

export const groupedClass2 = i18nGroup('custom group 2')(GroupedClass2)