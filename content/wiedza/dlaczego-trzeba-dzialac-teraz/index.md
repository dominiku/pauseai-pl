+++
title = "Dlaczego superinteligencja może nadejść szybciej, niż myślimy"
description = "Dołącz do naszej grupy i działaj na rzecz ograniczenia ryzyk wynikających z AI"
+++

[Najnowocześniejsze modele](https://pauseai.info/sota) AI są już ponadludzkie w wielu dziedzinach — choć na szczęście jeszcze nie we wszystkich. Jeśli osiągniemy superinteligencję zanim rozwiążemy problem alignmentu, będziemy [*narażeni na ryzyko wyginięcia*](https://pauseai.info/xrisk). Dlatego oszacowanie, kiedy możemy osiągnąć superinteligencję, jest kluczowe, aby nie zostać zaskoczonym. Jeśli nasze przewidywania będą zbyt optymistyczne, możemy nie zdążyć się przygotować.

Ale jak bardzo możemy się mylić? Kiedy będziemy mieć superinteligencję? Możliwe, że szybciej, niż większość ludzi sądzi.

## Nakładający się wykładniczy wzrost

Modele AI wymagają algorytmów, danych i chipów. Każdy z tych elementów szybko się poprawia dzięki ogromnym inwestycjom w AI. Ulepszenia w tych trzech obszarach nakładają się na siebie, prowadząc do wykładniczego wzrostu możliwości AI.

- **Więcej chipów.** ChatGPT został wytrenowany na [*10 000*](https://www.fierceelectronics.com/sensors/chatgpt-runs-10k-nvidia-training-gpus-potential-thousands-more) specjalistycznych chipach. Meta [*ogłosiła*](https://www.datacenterdynamics.com/en/news/meta-to-operate-600000-gpus-by-year-end/), że w tym roku będzie mieć **600 000** chipów nowej generacji do trenowania kolejnych modeli.

- **Szybsze chipy.** Co roku chipy stają się szybsze dzięki nowym architekturom i postępom w litografii. Chipy używane przez Metę są **10× szybsze** niż te, na których trenowano ChatGPT. Pojawiają się też bardzo wyspecjalizowane układy, takie jak chipy Groq, które są [**13× szybsze**](https://mezha.media/en/2024/02/22/groq-s-new-ai-chip-offers-to-increase-chatgpt-speed-by-13-times/) od konkurencji. W dłuższej perspektywie [*architektury ternarne*](https://arxiv.org/pdf/2402.17764.pdf) czy [*chipy fotoniczne*](https://www.nature.com/articles/s41566-024-01394-2) mogą jeszcze bardziej zwiększyć wydajność.

- **Więcej danych.** GPT-3 trenowano na [*45 TB*](https://community.openai.com/t/what-is-the-size-of-the-training-set-for-gpt-3/360896) tekstu, GPT-4 na około **20× większej ilości**. Firmy wykorzystują teraz także [*ogromne ilości wideo*](https://www.404media.co/nvidia-ai-scraping-foundational-model-cosmos-project/), audio oraz coraz częściej [***syntetyczne dane***](https://arxiv.org/pdf/2401.10020), które niegdyś uznawano za nieużyteczne (przez problem model collapse), ale [*nowe badania*](https://arxiv.org/abs/2406.07515) pokazują, że można temu zapobiec.

- **Lepsze dane.** Praca Textbooks Are All You Need [*pokazała*](https://arxiv.org/abs/2306.11644), że wysokiej jakości dane syntetyczne mogą drastycznie poprawić wyniki modelu, nawet przy dużo mniejszej ilości danych i mocy obliczeniowej.

- **Lepsze algorytmy.** Architektura Transformer umożliwiła rewolucję LLM. Nowe architektury mogą dać kolejne skoki. Model Mamba [*pokazuje*](https://arxiv.org/abs/2312.00752) np. **5× większą przepustowość**.

- **Lepsze runtimes.** Agentowe runtimes, RAG czy nawet sprytne promptowanie (np. [*Graph of Thought*](https://arxiv.org/abs/2305.16582)) mogą znacząco zwiększyć możliwości modeli.

  

Jest całkowicie możliwe, że samo skalowanie doprowadzi nas do [*niebezpiecznych możliwości*](https://pauseai.info/dangerous-capabilities) w ciągu roku lub dwóch, a biorąc pod uwagę wszystkie te nakładające się czynniki — nawet szybciej.

  

## Osiągnęliśmy poziom ludzkich możliwości w wielu dziedzinach już w 2023

  

W 2022 roku badacze AI sądzili, że minie [***17 lat***](https://aiimpacts.org/2022-expert-survey-on-progress-in-ai/), zanim AI będzie potrafiła napisać bestseller New York Timesa. Rok później **chiński profesor** [*wygrał konkurs literacki*](https://www.scmp.com/news/china/science/article/3245725/chinese-professor-used-ai-write-science-fiction-novel-then-it-won-national-award) **książką napisaną przez AI**.

  

Społeczność prognostów Metaculus przewidywała [*nadejście (słabej) AGI na 2057*](https://www.metaculus.com/questions/3479/date-weakly-general-ai-is-publicly-known/) rok zaledwie kilka lat temu, a dziś wskazuje na rok **2027**.

  

Spójrzmy teraz na definicję AGI używaną w tamtej ankiecie:

  

1. Wynik >90% w Winograd Schema Challenge

2. Wynik >75% na egzaminie SAT

3. Zaliczenie testu Turinga

4. Ukończenie gry *Montezuma's Revenge*

  

GPT-4 osiąga [***94,4%*** *w Winograd Schema Challenge*](https://d-kz.medium.com/evaluating-gpt-3-and-gpt-4-on-the-winograd-schema-challenge-reasoning-test-e4de030d190d) i [***93%*** *w SAT Reading*, ***89%*** *w SAT Math*](https://www.cnbc.com/2023/03/14/openai-announces-gpt-4-says-beats-90percent-of-humans-on-sat.html). Nie zaliczyło testu Turinga, **prawdopodobnie nie z powodu braku możliwości**, lecz dlatego, że jest wytrenowane, by nie wprowadzać ludzi w błąd. Firmom nie opłaca się, by AI twierdziła, że jest człowiekiem. Pozostaje *Montezuma's Revenge*. Nie jest niewyobrażalne, że mogłaby ją ukończyć przy użyciu jakiegoś sprytnego systemu, np. AutoGPT analizującego ekran i generującego odpowiednie wejścia. W maju 2023 [*GPT-4 potrafił napisać kod zdobywający diamentowy ekwipunek w Minecraft*](https://the-decoder.com/minecraft-bot-voyager-programs-itself-using-gpt-4/). Podsumowując: GPT-4 spełnia **2 z 4** kryteriów na pewno, pozostałe dwa są w zasięgu.

  

**To już się stało. Mamy (słabą) AGI.** Nie zajęło to 35 lat, tylko trzy. Pomyliśmy się o rząd wielkości.

  

## Dlaczego większość ludzi nie docenia postępów AI

  

Istnieje wiele powodów:

  

- **Trudno nadążyć.** Codziennie pojawiają się nowe przełomy. Jeśli czujesz, że się gubisz — to normalne.

- **Przesuwamy poprzeczkę.** W latach 90. celem AI było pokonanie mistrza szachowego. Gdy to się udało, poprzeczką stała się gra Go. Dziś mamy systemy osiągające [*99,9 percentyla w testach IQ*](https://bgr.com/tech/chatgpt-took-an-iq-test-and-its-score-was-sky-high/), [*tłumaczące 26 języków*](https://bgr.com/tech/chatgpt-took-an-iq-test-and-its-score-was-sky-high/) i [*wygrywające konkursy fotograficzne*](https://www.scientificamerican.com/article/how-my-ai-image-won-a-major-photography-competition/) — a mimo to nadal pytamy „kiedy AI osiągnie poziom człowieka?". Już nas przewyższa w wielu dziedzinach, ale skupiamy się na tych nielicznych, w których jeszcze jesteśmy lepsi.

- **Lubimy myśleć, że jesteśmy wyjątkowi.** Trudno zaakceptować, że maszyny mogą dorównać ludzkim zdolnościom, a [*mózg ma wiele mechanizmów obronnych*](https://pauseai.info/psychology-of-x-risk).

- **Jesteśmy fatalni w rozumieniu wzrostu wykładniczego.** [*Udowodniono naukowo*](https://www.researchgate.net/figure/Underestimation-of-exponential-growth-a-shows-the-participants-prediction-of-the_fig4_351171143), że systematycznie go nie doceniamy.

  

Na szczęście są jeszcze rzeczy, których AI **nie potrafi** — nie hakują lepiej niż najlepsi hakerzy i nie prowadzą badań nad AI na poziomie najlepszych badaczy. **Gdy osiągniemy którykolwiek z tych progów, wejdziemy w nowy reżim podwyższonego ryzyka.**

  

**Kiedy więc osiągniemy punkt, w którym AI będzie potrafiła robić wszystkie te rzeczy na ponadludzkim poziomie? Kiedy będziemy mieć superinteligencję?**

  

## Próg Ilyi

  

Myślę, że kluczowym momentem, który powinniśmy rozważyć, jest chwila, w której AI będzie bardziej kompetentna w prowadzeniu badań nad sztuczną inteligencją niż ktoś taki jak Ilya Sutskever (były główny naukowiec OpenAI). AI, która potrafi wnieść znaczący wkład w algorytmy i architektury AI, prawdopodobnie będzie też zdolna do samodoskonalenia się. Nazwijmy ten punkt potencjalnej samopoprawy **progiem Ilyi.** Gdy AI go osiągnie, może zacząć ulepszać samą siebie albo dlatego, że została do tego wyraźnie zaprogramowana, albo dlatego, że bycie mądrzejszą stanowi pomocny podcel w realizacji innych zadań ([*AI już teraz tworzą własne podcele*](https://github.com/Significant-Gravitas/Auto-GPT)). Takie iteracje mogą trwać tygodnie (trenowanie GPT-3 zajęło 34 dni), ale możliwe jest też, że zostanie opracowany pewien rodzaj usprawnień działających w czasie rzeczywistym, który pozwoli na istotny postęp w ciągu minut: [***Eksplozja Inteligencji***](https://www.youtube.com/watch?v=5qfIgCiYlfY).

  

## Jak daleko jesteśmy od progu Ilyi?

  

[*Przewidywanie momentu pojawienia się określonych zdolności*](https://arxiv.org/abs/2206.07682) podczas skalowania LLM-ów jest z natury trudne, ale jak dotąd widzieliśmy wiele umiejętności, które wcześniej uważano za bardzo odległe. [*Najnowsze modele AI*](https://pauseai.info/sota) pokonują już większość ludzkich programistów, więc nie jest nie do pomyślenia, że przyszłe modele, lepsze układy scalone, więcej danych i lepsze algorytmy razem przyczynią się do osiągnięcia progu Ilyi. Nie mamy pojęcia, jak zapewnić zgodność (ang. align) takiej AI ([*nawet OpenAI to przyznaje*](https://youtu.be/L_Guz73e6fw?t=1477)), a konsekwencje posiadania niezsynchronizowanej superinteligencji prawdopodobnie byłyby [*katastrofalne*](https://pauseai.info/xrisk).

  

## Działajmy

  

Nikt nie wie na pewno, kiedy osiągniemy próg Ilyi. Ale [*stawka jest zbyt wysoka*](https://pauseai.info/xrisk), by zakładać, że mamy dużo czasu. Musimy działać, biorąc pod uwagę nawet niskie ryzyko, że może nas od tego dzielić kilka miesięcy. Musimy [***wstrzymać rozwój najbardziej zaawansowanych modeli AI***](https://pauseai.info/proposal) **już teraz**. To od każdego z nas zależy, by [*podjąć działania*](https://pauseai.info/action) i upewnić się, że nie zostaniemy zaskoczeni.