(ns figwheel.connect (:require [figwheel.client] [climbr.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/climbr.core.on-js-reload (apply js/climbr.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'climbr.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

