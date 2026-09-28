+++
title = "Postulaty PauseAI"
description = "Dołącz do naszej grupy i działaj na rzecz ograniczenia ryzyk wynikających z AI"
+++

<p class="intro"><strong>Wprowadzić tymczasową przerwę w trenowaniu najpotężniejszych ogólnych systemów AI</strong>, dopóki nie będziemy wiedzieć, jak budować je bezpiecznie i poddać demokratycznej kontroli.</p>

**Wersja: 4 lutego 2025**

Poszczególne państwa mogą i powinny wprowadzić ten środek już teraz. Nie możemy oczekiwać, że państwa lub firmy będą ryzykować utratę przewagi konkurencyjnej poprzez wstrzymanie trenowania systemów AI na dłuższy czas, jeśli inne państwa lub firmy tego nie zrobią. Dlatego potrzebujemy **globalnej przerwy**.
 
Przyjrzyjmy się, co jest potrzebne, aby to osiągnąć.

## Droga do traktatu

Międzynarodowe porozumienie zazwyczaj powstaje w wyniku szczytu, podczas którego przywódcy państw spotykają się, aby omówić problem i podjąć decyzję. Do tej pory odbyły się już [*trzy szczyty dotyczące bezpieczeństwa AI*](https://pauseai.info/summit).

Głównym celem tych szczytów powinno być wypracowanie traktatu. Jednak dotychczasowe szczyty nie były skuteczne w tworzeniu prawnie wiążących ustaleń. A budowanie traktatów jest zazwyczaj powolne i podatne na weta. [*Możliwe, że nie mamy czasu*](https://pauseai.info/urgency), by czekać na tradycyjne procesy tworzenia traktatów.

Dlatego potrzebujemy nowego **procesu ich tworzenia**:

- Udział zarówno **USA, jak i Chin** jest kluczowy.
- Proces musi być **odporny na weto** pojedynczego kraju.
- **Musi być szybki.** Normalne procedury zajmują lata, a my [*możemy nie mieć tyle czasu*](https://pauseai.info/urgency).
- Skala tego procesu jest bezprecedensowa i wymaga poparcia wszystkich państw.

## Środki, które powinien zawierać traktat

### 1. Utworzenie międzynarodowej agencji ds. bezpieczeństwa AI, analogicznej do MAEA (IAEA)

Agencja ta byłaby odpowiedzialna za:

- **Udzielanie zgody na wdrożenia.** W tym ćwiczenia Red Team / [*ewaluacje modeli*](https://pauseai.info/evaluations).
- **Udzielanie zgody na nowe procesy trenowania modeli AI powyżej określonego progu** (np. powyżej 1 miliarda parametrów).
- **Okresowe spotkania** dotyczące postępu badań nad bezpieczeństwem AI.

### 2. Zezwalanie na trenowanie systemów ogólnej AI tylko wtedy, gdy można zagwarantować ich bezpieczeństwo

- Przez *ogólne modele AI* rozumiemy modele, które spełniają co najmniej jeden z warunków: 1) mają więcej niż 10¹² parametrów, 2) wymagają ponad 10²⁵ FLOPów (operacji zmiennoprzecinkowych) do treningu, 3) ich możliwości prognozuje się na powyżej 86% w benchmarku MMLU. (uwaga: nie dotyczy to wąskich systemów AI, takich jak rozpoznawanie obrazu w diagnostyce raka.)
- Możliwe, że problem alignmentu AI nigdy nie zostanie rozwiązany — może być nierozwiązywalny. W takim przypadku **nie powinniśmy nigdy zezwalać na trenowanie takich systemów**.
- Należy **weryfikować, że nie odbywają się niebezpieczne treningi.** Można to robić na [*wiele sposobów*](https://arxiv.org/abs/2408.16074), m.in.: [*śledzenie kart graficznych*](https://arxiv.org/abs/2303.11341), zachęty dla sygnalistów, monitoring energii, inspekcje centrów danych, analizę finansową, kontrole w fabrykach półprzewodników, inspekcje deweloperów AI, geolokalizację chipów i raportowanie oparte na chipach. [*Łańcuch dostaw chipów AI*](https://www.governance.ai/post/computing-power-and-the-governance-of-ai) jest silnie scentralizowany, co umożliwia globalny nadzór.
- Należy wymagać [*nadzoru podczas sesji trenowania*](https://www.alignmentforum.org/posts/Zfk6faYvcf5Ht7xDx/compute-thresholds-proposed-rules-to-mitigate-risk-of-a-lab).
- Nawet jeśli uda się stworzyć kontrolowalną, bezpieczną AI, należy ją budować i wdrażać **wyłącznie pod silnym nadzorem demokratycznym**. Superinteligencja jest zbyt potężna, by kontrolowała ją jedna firma lub jedno państwo.

### 3. Zezwalanie na wdrożenie modeli tylko wtedy, gdy [*nie wykazują niebezpiecznych zdolności*](https://pauseai.info/dangerous-capabilities) (ocena przed wdrożeniem)

- Potrzebne będą standardy i niezależne treningi Red Team, aby ocenić, czy model ma niebezpieczne zdolności.
- Lista takich zdolności może zmieniać się wraz z rozwojem AI.
- Należy podkreślić, że **pełne poleganie na ewaluacjach modeli** [*nie wystarcza*](https://pauseai.info/4-levels-of-ai-regulation).

Wprowadzenie pauzy może przynieść odwrotny skutek, jeśli zostanie przeprowadzone niewłaściwie. Możesz przeczytać więcej o tym, [*jak ograniczyć te ryzyka*](https://pauseai.info/mitigating-pause-failures).

Więcej szczegółów na temat wykorzystania łańcuchów dostaw chipów AI do globalnego nadzoru można znaleźć w tekście [„*Building the Pause Button*"](https://pauseai.info/building-the-pause-button).

## Inne środki, które skutecznie spowalniają rozwój

- **Zakaz trenowania systemów AI na materiałach objętych prawami autorskimi.** Pomaga to rozwiązać problemy z prawami autorskimi, spowalnia narastające nierówności oraz hamuje postęp w kierunku superinteligencji.
- **Pociąganie twórców modeli AI do odpowiedzialności za przestępstwa popełnione przy użyciu ich systemów.** Daje to twórcom modeli większą motywację, aby zapewnić bezpieczeństwo swoich systemów.

## Polityka długoterminowa

W momencie pisania tekstu trenowanie modelu o rozmiarze GPT-3 kosztuje miliony dolarów. To sprawia, że trenowanie takich modeli jest bardzo trudne, co z kolei ułatwia egzekwowanie kontroli nad treningiem poprzez śledzenie GPU. Jednak koszt trenowania modeli spada wykładniczo dzięki ulepszeniom sprzętowym i nowym algorytmom treningowym.

Nadejdzie moment, w którym potencjalnie superinteligentne modele AI będzie można trenować za kilka tysięcy dolarów lub mniej, być może nawet na sprzęcie konsumenckim. Musimy być na to przygotowani. Powinniśmy rozważyć następujące polityki:

- **Ograniczenie publikacji algorytmów treningowych / ulepszeń runtime.** Czasami nowy algorytm czyni trenowanie znacznie bardziej wydajnym. Przykładowo architektura Transformer umożliwiła praktycznie cały ostatni postęp w AI. Takie skoki możliwości mogą nastąpić w dowolnym momencie, więc powinniśmy rozważyć ograniczenie publikacji takich algorytmów, aby zmniejszyć ryzyko gwałtownego skoku możliwości. Istnieją również innowacje umożliwiające [***zdecentralizowane treningi***](https://www.primeintellect.ai/blog/opendiloco), a także ulepszenia runtime, które mogą drastycznie zwiększyć możliwości istniejących modeli. Blokowanie publikacji takich algorytmów można wdrożyć podobnie jak zakazy innych form informacji, np. nielegalnych treści pornograficznych.
- **Ograniczenie wzrostu możliwości zasobów obliczeniowych.** Jeśli trenowanie superinteligencji stanie się możliwe na sprzęcie konsumenckim, znajdziemy się w trudnej sytuacji. Powinniśmy rozważyć ograniczenia dotyczące rozwoju sprzętu (np. ograniczenia w litografii, projektowaniu chipów oraz nowych paradygmatach obliczeń, takich jak chipy fotoniczne czy komputery kwantowe).

## Pomóż nam to osiągnąć

[*Dołącz*](https://pauseai.info/join) do ruchu, aby współpracować lub [*podejmij działania*](https://pauseai.info/action) na własną rękę!