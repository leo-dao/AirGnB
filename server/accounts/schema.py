from graphene_django import DjangoObjectType
import graphene
import graphql_jwt
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery
from accounts.models import User

class AuthMutation(graphene.ObjectType):
   register = mutations.Register.Field()
   verify_account = mutations.VerifyAccount.Field()
   update_account = mutations.UpdateAccount.Field()
   resend_activation_email = mutations.ResendActivationEmail.Field()
   send_password_reset_email = mutations.SendPasswordResetEmail.Field()
   password_reset = mutations.PasswordReset.Field()
   password_change = mutations.PasswordChange.Field()
   token_auth = mutations.ObtainJSONWebToken.Field()

class UserType(DjangoObjectType):
   class Meta:
      model = User
      fields = '__all__'

class Query(UserQuery, MeQuery, graphene.ObjectType):
   all_users = graphene.List(UserType)
   user = graphene.Field(UserType, id=graphene.String(), email=graphene.String())

   def resolve_all_users(self, info, **kwargs):
      return User.objects.all()

   def resolve_user(self, info, **kwargs):
      id = kwargs.get('id')
      email = kwargs.get('email')

      if id is not None:
         return User.objects.get(pk=id)

      if email is not None:
         return User.objects.get(email=email)

      return None

class Mutation(AuthMutation, graphene.ObjectType):
   pass

schema = graphene.Schema(query=Query, mutation=Mutation)