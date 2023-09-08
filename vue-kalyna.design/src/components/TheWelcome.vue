<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import PageTitle from './PageTitle.vue'
</script>

<template>
  <section class="first-screen">
      <div class="container">
          <PageTitle title="Добро пожаловать в Мир Кода и Вдохновения!" description="Здесь вас ждут нескончаемые возможности и бескрайние горизонты программирования. " />
           
    
          <h3>Мы - Сообщество Программистов, где рождаются идеи, где байты и биты превращаются в инновации, а границы не существуют.</h3>
        </div>
  </section>

  <section class="advantages">
      <div class="container">
        <h2 class="template-title">Почему мы?</h2>

          <ol>
            <li>1. Страсть и Инновации: Мы искренне влюблены в мир кода. У нас нет предела вдохновению и стремлению создавать нечто удивительное.</li>
            <li>2. Обучение на Первом Месте: У нас - это место, где вы можете найти менторов и ресурсы, чтобы поднять свои навыки на новый уровень. Учебные материалы, онлайн-курсы, и поддержка готовы помочь вам в вашем учебном путешествии.</li>
            <li>3. Проекты, Проекты, Проекты: Учиться важно, но руки чешутся что-то создать? Присоединяйтесь к нашим проектам или начните свой собственный! Здесь всегда есть место для ваших идей и амбиций.</li>
            <li>4. Общение и Стремление: Наше сообщество - это место, где вы встретите единомышленников, готовых обсуждать последние тренды, делиться опытом и просто общаться.</li>
          </ol>
         
          
          
          
          
          
          
          Добро пожаловать в Сообщество Программистов, где код живет и дыхание инноваций ощущается повсюду. Здесь мы создаем будущее, и вместе мы можем сделать его ярче и увлекательнее! 
      </div>
  </section>
  <div class="container">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
  
      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeItem>
  
    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tooling</template>
  
      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
      recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
      you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
      <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.
  
      <br />
  
      More instructions are available in <code>README.md</code>.
    </WelcomeItem>
  
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>
  
      Get official tools and libraries for your project:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
      you need more resources, we suggest paying
      <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
      a visit.
    </WelcomeItem>
  
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>
  
      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
      Discord server, or
      <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
        >StackOverflow</a
      >. You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
      the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>
  
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>
  
      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
    </WelcomeItem>
  </div>
</template>
