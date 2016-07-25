(ns ^:figwheel-always climbr.behaviour.behaviour
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [climbr.matter.matter :as m]
            [climbr.app_state :as a]
            [climbr.controls.keyboard :as k]
            [climbr.utils.utils :as u]
            [climbr.behaviour.utils :refer [h1-holds? h2-holds?]]
            [cljs.core.async :refer [tap chan <!]]))

(defn init-boulder-touch-events! [engine]
  (.on m/events
    engine
    "collisionStart"
    (fn[e]
      (let [pairs (.-pairs e)
            pair (if (.-length pairs) (aget pairs 0) nil)
            body-a (if pair (.-bodyA pair) nil)
            body-b (if pair (.-bodyB pair) nil)
            class-a (m/read-data "class" body-a)
            class-b (m/read-data "class" body-b)
            touched-a? (and (= "boulder" class-a) (= "hand" class-b))
            touched-b? (and (= "boulder" class-b) (= "hand" class-a))
            hand (cond touched-a? body-b
                       touched-b? body-a
                       :else nil)
            touched-boulder (cond touched-a? body-a
                             touched-b? body-b
                             :else nil)

            touched-boulder? (not= touched-boulder nil)
            hand-name (if touched-boulder? (m/read-data "name" hand) nil)
            key-boulder (case hand-name "h1" :h1-holds
                                        "h2" :h2-holds
                                         nil)
            existing-boulder (get @a/app-state key-boulder)]

        (when (and touched-boulder? (nil? existing-boulder))
          (let [boulder (.create m/constraint #js { :bodyA hand :bodyB touched-boulder })]
            (do
              (.addConstraint m/world (.-world engine) boulder)
              (swap! a/app-state assoc key-boulder boulder))))))))

(defn- fetch-climber-part [part] (get-in @a/app-state [:climber part]))

(defn- fetch-hand [hand]
             (let [h1 (fetch-climber-part :h1)
                   h2 (fetch-climber-part :h2)
                   h1x (.-x (.-position h1))
                   h2x (.-x (.-position h2))
                   h1-is-left? (< h1x h2x)

                   left-hand (if h1-is-left? h1 h2)
                   right-hand (if h1-is-left? h2 h1)]

               (case hand
                   :left left-hand
                   :right right-hand
                   :free (fetch-free-hand))))

(defn- fetch-free-hand []
  (let [h1-holds (get @a/app-state :h1-holds)
        h2-holds (get @a/app-state :h2-holds)
        both-hold (and (not (nil? h1-holds)) (not (nil? h2-holds)))]

    (cond both-hold nil
      (not (nil? h1-holds)) (fetch-climber-part :h2)
      (not (nil? h2-holds)) (fetch-climber-part :h1)
      :else nil)))

(defn- get-boulder-for-hand [hand-name]
  (let [boulder-key (case hand-name
                      "h1" :h1-holds
                      "h2" :h2-holds
                      nil)]
    (get @a/app-state boulder-key)))



(defn- remove-boulder-for-hand! [hand-name]
  (let [key-boulder (case hand-name
                   "h1" :h1-holds
                   "h2" :h2-holds)]

       (swap! a/app-state dissoc key-boulder)))




(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

(def- not-nil? (complement nil?))

;(with [keypressed (chan)]
;  :do
;  (tap k/keypressed keypressed)
;  (go (while true
;        (let [key (<! keypressed)
;              hand (case key
;                     :a :left
;                     :d :right
;                     nil)]
;
;          (when hand (release-hand! hand engine)))))
;
;  :where [release-hand! (fn [hand engine]
;                          (let [boulder (get-boulder-for-hand hand)]
;                            (if-not (nil? boulder)
;                              (do
;                                (.remove m/world (.-world engine) boulder)
;                                (remove-boulder-for-hand! hand)))))])

;(invert-rl on-key-left)