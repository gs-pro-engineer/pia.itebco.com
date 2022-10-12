<template>
    <div class="tree-chart-content">
        <table v-if="treeData.name" >
            <tr>
                <td :colspan="treeData.children ? treeData.children.length * 2 : 1" :class="{parentLevel: treeData.children, extend: treeData.children && treeData.extend}">
                    <div :class="{node: true, hasMate: treeData.mate}">
                        <div :class="['person', treeData.gender.uuid]" @click="$emit('click-node', treeData)">
                            <div class="avat">
                                <img :src="treeData.image_url" />
                            </div>
                            <router-link v-if="treeData.uuid" :to="{ name: 'appMemberView', params: { uuid: treeData.uuid, slug: treeData.slug } }" class="name">{{treeData.alias || treeData.name}}</router-link>
                            <div v-else class="name">{{treeData.alias || treeData.name}}</div>
                        </div>
                        <div :class="['person', treeData.mate.gender.uuid]" v-if="treeData.mate" @click="$emit('click-node', treeData.mate)">
                            <div class="avat">
                                <img :src="treeData.mate.image_url" />
                            </div>
                            <router-link v-if="treeData.mate.uuid" :to="{ name: 'appMemberView', params: { uuid: treeData.mate.uuid, slug: treeData.mate.slug } }" class="name">{{treeData.mate.alias || treeData.mate.name}}</router-link>
                            <div v-else class="name">{{treeData.mate.alias || treeData.mate.name}}</div>
                        </div>
                    </div>
                    <div class="extend_handle" v-if="treeData.children" @click="toggleExtend(treeData)"></div>
                </td>
            </tr>
            <tr v-if="treeData.children && treeData.extend">
                <td v-for="(children, index) in treeData.children" :key="index" colspan="2" class="childLevel">
                    <TreeChart :json="children" @click-node="$emit('click-node', $event)" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TreeChart",
        props: ["json"],
        data() {
            return {
                treeData: {}
            }
        },
        watch: {
            json: {
                handler: function(Props) {
                    let extendKey = function(jsonData) {
                        jsonData.extend = (jsonData.extend === void 0 ? true : !!jsonData.extend);
                        if (Array.isArray(jsonData.children)) {
                            jsonData.children.forEach(c => {
                                extendKey(c)
                            })
                        }
                        return jsonData;
                    }
                    if (Props) {
                        this.treeData = extendKey(Props);
                    }
                },
                immediate: true
            }
        },
        methods: {
            toggleExtend: function(treeData) {
                treeData.extend = !treeData.extend;
                this.$forceUpdate();
            }
        }
    }

</script>

<style scoped>
    table {
        border-collapse: separate !important;
        border-spacing: 0 !important
    }

    td {
        position: relative;
        vertical-align: top;
        padding: 0 0 50px 0;
        text-align: center
    }

    .extend_handle {
        position: absolute;
        left: 50%;
        bottom: 30px;
        width: 10px;
        height: 10px;
        padding: 10px;
        -webkit-transform: translate3d(-15px, 0, 0);
        transform: translate3d(-15px, 0, 0);
        cursor: pointer
    }

    .extend_handle:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 5px solid;
        border-color: #ccc #ccc transparent transparent;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        -webkit-transform-origin: 50% 50% 0;
        transform-origin: 50% 50% 0;
        -webkit-transition: -webkit-transform .3s ease;
        transition: -webkit-transform .3s ease;
        transition: transform .3s ease;
        transition: transform .3s ease, -webkit-transform .3s ease
    }

    .extend_handle:hover:before {
        border-color: #333 #333 transparent transparent
    }

    .extend .extend_handle:before {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    .extend:after {
        bottom: 15px
    }

    .childLevel:not(:only-child) > .tree-chart-content > table > tr > td > .node:only-child:not(.hasMate) {
        width: 8em;
    }
    .childLevel:only-child > .tree-chart-content > table > tr > td > .node:only-child:not(.hasMate) {
        width: 13em;
    }


    .childLevel:before,
    .extend:after {
        content: "";
        position: absolute;
        left: 50%;
        height: 15px;
        border-left: 2px solid #ccc;
        -webkit-transform: translate3d(-1px, 0, 0);
        transform: translate3d(-1px, 0, 0)
    }

    .childLevel:before {
        bottom: 100%
    }

    .childLevel:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -15px;
        border-top: 2px solid #ccc
    }

    .childLevel:first-child:before,
    .childLevel:last-child:before {
        display: none
    }

    .childLevel:first-child:after {
        left: 50%;
        height: 15px;
        border: 2px solid;
        border-color: #ccc transparent transparent #ccc;
        border-radius: 6px 0 0 0;
        -webkit-transform: translate3d(1px, 0, 0);
        transform: translate3d(1px, 0, 0)
    }

    .childLevel:last-child:after {
        right: 50%;
        height: 15px;
        border: 2px solid;
        border-color: #ccc #ccc transparent transparent;
        border-radius: 0 6px 0 0;
        -webkit-transform: translate3d(-1px, 0, 0);
        transform: translate3d(-1px, 0, 0)
    }

    .childLevel:first-child.childLevel:last-child:after {
        left: auto;
        border-radius: 0;
        border-color: transparent #ccc transparent transparent;
        -webkit-transform: translate3d(1px, 0, 0);
        transform: translate3d(1px, 0, 0)
    }

    .node {
        width: 7em;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center
    }

    .node.hasMate {
        width: 13em;
    }

    .node,
    .node .person {
        position: relative;
        display: inline-block
    }

    .node .person {
        z-index: 1;
        width: 6em;
        overflow: hidden;
        transform: scale(1);
        transition: all 0.5s ease;
        z-index: 1;
    }

    .node .person:hover {
        transform: scale(1.8);
        z-index: 2;
    }

    .node .person .avat {
        display: block;
        width: 5em;
        height: 5em;
        margin: auto;
        overflow: hidden;
        background: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 5px;
        /*padding: 1px;*/
        border: 2px solid #d1d2d4;
    }

    .node .person.male .avat {
        border: 2px solid #1469e0;
    }

    .node .person.female .avat {
        border: 2px solid #8965e0;
    }

    .node .person .avat img {
        width: 100%;
        height: 100%
    }

    .node .person .name {
        height: 2em;
        line-height: 2em;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
    }

    .node .person a.name {
        color: #000000;
    }

    .node .person.male a.name {
        color: #0a346d;
    }

    .node .person.female a.name {
        color: #351e63;
    }

    .node.hasMate:after {
        content: "";
        position: absolute;
        left: 2em;
        right: 2em;
        top: 2em;
        border-top: 2px solid #f5365c;
        z-index: 0
    }

    .node.hasMate .person:last-child {
        margin-left: 0;
    }

    .landscape {
        -webkit-transform: translate(-100%) rotate(-90deg);
        transform: translate(-100%) rotate(-90deg);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0
    }

    .landscape .node {
        text-align: left;
        height: 8em;
        width: 8em
    }

    .landscape .person {
        position: relative;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        padding-left: 4.5em;
        height: 5em;
        top: 5em;
        left: -1em
    }

    .landscape .person .avat {
        position: absolute;
        left: 0
    }

    .landscape .person .name {
        height: 5em;
        line-height: 5em
    }

    .landscape .hasMate {
        position: relative
    }

    .landscape .hasMate .person {
        position: absolute
    }

    .landscape .hasMate .person:first-child {
        left: auto;
        right: -5em
    }

    .landscape .hasMate .person:last-child {
        left: -5em;
        margin-left: 0
    }

</style>
