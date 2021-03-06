(ns ^:figwheel-always climbr.controls.keyboard
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [mult put! chan <!]]))

(defn listen! [el e fn]
  (.addEventListener el e fn))

(defn event-to-direction [e]
  (case e.keyCode
    37 :left
    38 :up
    39 :right
    40 :down
    68 :hook-right ;d
    65 :hook-left ;a
    87 :release-both ;w
    83 :hook-both ;s
    69 :release-right ;e
    81 :release-left ;q
    nil))

(def keypressed
  (let [keypressed (chan)]
     (do
       (listen! js/document "keydown" (fn [e] (go (>! keypressed (event-to-direction e)))))
       (mult keypressed))))

;(def keypressed-m
;  (is (mult keypressed-chan)
;    :where [keypressed-chan (chan)]
;    :with-side-effect (listen! js/document "keydown" (fn [e] (go (>! keypressed-chan  (event-to-direction e)))))))
;--------------------------------------------

