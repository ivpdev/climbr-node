(ns ^:figwheel-always climbr.utils.utils
  "Utilities"
  (:require [cemerick.url :as url]
            [climbr.utils.dom :as dom]))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

(defn debug [x]
  (set! (.-debug1 js/window) x)
  (.log js/console x))

;(defn println [x]
;   (.log js/console x))

(defmacro TODO
  "Ignores body, yields nil"
  [& body])

(defn in?
  "true if coll contains el"
  [coll el]
  (some #(= el %) coll))

(def not-nil? (complement nil?))

(defn get-current-level-name
  "get name of level from URL"[]
  (let [location-details (url/url (-> js/window .-location .-href))
        query (:query location-details)
        level (get query "l")
        default-level "l0"]

    (or level default-level)))

(defn hide-loading-banner![]
  (let [loading-el (.getElementById js/document "loading")]
    (set! (.-hidden loading-el) true)))

(defn show-level-code[code]
   (do
     (dom/remove-class "hidden" "#level-code-container")
     (dom/set-inner-html code "#level-code")))


(defn cartesian-prod
  "computes cartesian product of two collections returning collection of all possible combinations"
  [col1 col2]
  (for [x col1
        y col2]
    [x y]))

(defn get-canvas-width[]
      ;TODO
  800)

(defn get-canvas-height[]
      ;TODO
  600)

(defn numeric? [obj]
      (not (js/isNaN obj)))

(defn- in-interval?
       "Returns a predicate that tests if its argument falls in
       the inclusive interval [a, b]."
       [a b]
       (fn [x] (and (>= x a) (<= x b))))

(defn- intersects?[A-min A-max B-min B-max offset]
       (let [target-min (- A-min offset)
             target-max (+ A-max offset)
             in-target-interval? (in-interval? target-min target-max)]

            (or (in-target-interval? B-min)
                (in-target-interval? B-max))))

;TODO create script which parses source code end extracts all TODOs

;TODO create issue macro

;TODO import globally

;(def y (is (+ x 1)
;          :where
;            [x (+ a 1)
;             a 42]))
;
;(defmacro is
;  "Inverted 'let'"
;  [expr & extras]
;
;  (let [has-where (contains? extras :where)]
;    (println has-where)))
;
;
;(defmacro when
;  "Evaluates test. If logical true, evaluates body in an implicit do."
;  {:added "1.0"}
;  [test & body]
;  (list 'if test (cons 'do body)))
;
;(defmacro unless
;  "Inverted 'if'"
;  [test & branches]
;  (conj (reverse branches) test 'if))

;TODO macros ???
;
;
;
