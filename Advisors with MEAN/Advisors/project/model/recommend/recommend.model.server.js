module.exports = function() {

    var mongoose = require("mongoose");
    var RecommendSchema = require("./recommend.schema.server")();
    var Recommend = mongoose.model("Recommend", RecommendSchema);

    var api = {
        createRecommendModelForUser: createRecommendModelForUser,
        findRecommendById: findRecommendById,
        updateRecommend: updateRecommend,
        deleteThread: deleteThread
    };
    return api;

    function createRecommendModelForUser(userId, recdata) {
        recdata._user = userId;
        return Recommend.create(recdata);
    }


    function findRecommendById(recommendId) {
        return Recommend.findById(recommendId);
    }

    function updateRecommend(recommendId, thread) {
        return Recommend
            .update({_id: recommendId},{
                $set: {
                    views: thread.views,
                    numberOfComments: thread.numberOfComments
                }
            });
    }

    function deleteThread(recommendId) {
        return Recommend.remove({_id: recommendId});
    }
};